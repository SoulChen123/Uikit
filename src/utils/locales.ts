import { DOMAIN } from "../config";
import { ILocale } from "../types";
import { LANGUAGES } from "../types/enum";

class Locales {
  locales = new Map<ILocale, Record<string, string>>();
  constructor(project: "root" | "markets" | "account" | "wallet") {
    Promise.all(
      Object.keys(LANGUAGES).map(async (locale) => {
        return await this.getLocale(project, locale as ILocale);
      })
    );
  }

  async getLocale(project: "root" | "markets" | "account" | "wallet", locale: ILocale) {
    try {
      const res = await fetch(
        DOMAIN?.CDN + `/locales/${project}/${locale.replace("-", "_")}.json?ts=${new Date().getTime()}`
      );
      const json = await res.json();
      this.locales.set(locale, json || {});
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  get(locale: ILocale) {
    return this.locales.get(locale);
  }

  set(locale: ILocale, message: Record<string, string>) {
    this.locales.set(locale, message);
  }
}

export default Locales;
