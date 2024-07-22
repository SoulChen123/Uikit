import { LokaliseApi } from "@lokalise/node-api";
import path from "path";
import fs from "fs";
import AdmZip from "adm-zip";
import got from "got";
import process from "process";

const API_KEY = "*";

const PROJECT_ID = "*xx.04884321";

const LILT_USER_IDS = [536974, 539473, 540245, 540921, 540922];

const __dirname = path.resolve();

(async () => {
  try {
    const lokaliseApi = new LokaliseApi({ apiKey: API_KEY });

    const i18nFolder = path.resolve(__dirname, "i18n");

    const i18nFile = path.resolve(i18nFolder, "en.json");

    const data = fs.readFileSync(i18nFile, "utf8");

    const buff = Buffer.from(data, "utf8");

    const base64I18n = buff.toString("base64");

    const uploadResult = await lokaliseApi
      .files()
      .upload(PROJECT_ID, { data: base64I18n, filename: "en.json", lang_iso: "en" });

    await new Promise((resolve) => {
      const interval = setInterval(async () => {
        const reloadedProcess = await lokaliseApi.queuedProcesses().get(uploadResult.process_id, {
          project_id: PROJECT_ID
        });

        if (reloadedProcess.status === "finished") {
          resolve(reloadedProcess.status);
          clearInterval(interval);
        }
      }, 1000);
    });

    console.log("Uploaded success 🚀🚀🚀");

    console.log("Downloading translations...");

    const downloadResponse = await lokaliseApi.files().download(PROJECT_ID, {
      format: "json",
      original_filenames: true,
      directory_prefix: "",
      indentation: "2sp",
      placeholder_format: "icu"
    });

    const translationsUrl = downloadResponse.bundle_url;

    const archive = path.resolve(i18nFolder, "archive.zip");

    console.log("Unpacking...");

    const response = await got.get(translationsUrl).buffer();
    fs.writeFileSync(archive, response);

    const translationFolder = path.resolve(__dirname, "src/providers/locale");

    const zip = new AdmZip(archive);
    zip.extractAllTo(translationFolder, true);

    fs.unlink(archive, (err) => {
      if (err) throw err;
    });

    console.log("Downloaded success 🚀🚀🚀");

    const keys = await lokaliseApi.keys().list({
      project_id: PROJECT_ID,
      filter_untranslated: 1,
      limit: 5000
    });

    const keyIds = keys.items.map((currentValue) => {
      return currentValue.key_id;
    });

    try {
      const task = await lokaliseApi.tasks().create(
        {
          title: `Translate-${new Date().toISOString()}`,
          keys: keyIds,
          languages: [
            {
              language_iso: "zh_CN",
              users: LILT_USER_IDS
            },
            {
              language_iso: "ru",
              users: LILT_USER_IDS
            },
            {
              language_iso: "es",
              users: LILT_USER_IDS
            },
            {
              language_iso: "ko",
              users: LILT_USER_IDS
            },
            {
              language_iso: "fr",
              users: LILT_USER_IDS
            },
            {
              language_iso: "vi",
              users: LILT_USER_IDS
            }
          ]
        },
        { project_id: PROJECT_ID }
      );
      if (task.status === "created") {
        console.log("Created task success 🚀🚀🚀");
      }
    } catch (error) {
      console.error(error.message);
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
