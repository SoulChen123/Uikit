import React, { createContext, useRef } from "react";
import useUIKit from "../hooks/useUIKit";
import en from "./locale/en.json";
import zh_CN from "./locale/zh_CN.json";
import es from "./locale/es.json";
import ru from "./locale/ru.json";
import ko from "./locale/ko.json";
import fr from "./locale/fr.json";
import vi from "./locale/vi.json";
import type { ILocale } from "../types";

type ILocalizationContext = {
  t: (e: string) => string;
};

export const LocalizationContext = createContext<ILocalizationContext>({
  t: () => ""
});

const messageMap = new Map<ILocale, Record<string, string>>([
  ["en", en],
  ["zh-CN", zh_CN],
  ["es", es],
  ["ru", ru],
  ["fr", fr],
  ["vi", vi],
  ["ko", ko]
]);

const Localization: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { locale } = useUIKit();
  const messages = useRef(messageMap);

  const t = (e: string) => messages.current.get(locale)?.[e] || e;

  return <LocalizationContext.Provider value={{ t }}>{children}</LocalizationContext.Provider>;
};

export default Localization;
