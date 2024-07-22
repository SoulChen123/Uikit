import { isBrowser } from "../../utils/dom";
import { useCallback, useState } from "react";
import Cookies from "js-cookie";
import { ILocale } from "../../types";
import useSafeLayoutEffect from "../../hooks/useSafeLayoutEffect";

export const getLocaleFromLS = (): ILocale => {
  try {
    const localeFromJS = isBrowser ? localStorage.getItem("locale") : Cookies.get("NEXT_LOCALE");

    return (localeFromJS as ILocale | null) || "en";
  } catch {
    return "en";
  }
};

const useLocaleSync = (nextLocale?: ILocale) => {
  const localeFromLS = getLocaleFromLS();

  const [locale, setLocale] = useState<ILocale>(nextLocale || localeFromLS);

  const setLocaleMiddleware = useCallback((_locale: ILocale | null) => {
    try {
      if (_locale) {
        localStorage.setItem("locale", _locale);
        Cookies.set("NEXT_LOCALE", _locale, {
          expires: 30
        });
        setLocale(_locale);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useSafeLayoutEffect(() => {
    if (nextLocale) {
      setLocaleMiddleware(nextLocale);
    }
  }, []);

  useSafeLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return { locale, setLocaleMiddleware };
};

export default useLocaleSync;
