import fs from "node:fs";
import path from "node:path";

const filesList: string[] = [];

const __dirname = path.resolve();

const readFileList = (dir) => {
  fs.readdirSync(dir).map((item, index) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // readFileList(fullPath, filesList); //递归读取文件
      readFileList(fullPath); //递归读取文件
    } else {
      if (fullPath.includes("widgets") || fullPath.includes("components")) {
        filesList.push(fullPath);
      }
    }
  });
};

readFileList(path.resolve(__dirname, "src"));

readFileList(path.resolve(__dirname, "../web3/src"));

const extractedList = new Set();

filesList.forEach((p) => {
  const read = fs.readFileSync(p, "utf-8");
  const matches = read.match(/t\(['"]([^'"]+)['"]\)/g);
  if (matches) {
    matches.forEach((match) => {
      const extractedText = match.slice(3, -2);
      extractedList.add(extractedText);
    });
  }
});

const en = JSON.stringify(Object.fromEntries(extractedList.entries()), null, 2);

if (!fs.existsSync(path.resolve(__dirname, "i18n"))) {
  fs.mkdirSync(path.resolve(__dirname, "i18n"), { recursive: true });
}
fs.writeFile(path.resolve(__dirname, "i18n/en.json"), en, "utf-8", (err) => {
  console.log(err);
});
