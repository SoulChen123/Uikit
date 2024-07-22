import Cookies from "js-cookie";
import { useCallback, useState } from "react";
import useSafeLayoutEffect from "../../hooks/useSafeLayoutEffect";
import { IThemeMode } from "../../types";
import { isBrowser } from "../../utils/dom";

export const getThemeFromLS = (): IThemeMode | null => {
  try {
    const themeFromJS = isBrowser ? localStorage.getItem("theme") : Cookies.get("theme");
    return (themeFromJS ?? null) as IThemeMode | null;
  } catch {
    return null;
  }
};

const useThemeModeSync = (hardThemeMode?: IThemeMode, themeCookie?: IThemeMode, prefixCls?: string) => {
  const themeFromLS = getThemeFromLS();
  const [themeMode, setThemeMode] = useState<IThemeMode>(hardThemeMode ?? themeCookie ?? themeFromLS ?? "dark");

  const setThemeModeMiddleware = useCallback(
    (_theme: IThemeMode) => {
      if (hardThemeMode) return;
      try {
        localStorage.setItem("theme", _theme);
        Cookies.set("theme", _theme, {
          expires: 30
        });

        setThemeMode(_theme);
      } catch (e) {
        console.error(e);
      }
    },
    [hardThemeMode]
  );

  useSafeLayoutEffect(() => {
    if (hardThemeMode && themeMode && hardThemeMode !== themeMode) {
      setThemeMode(hardThemeMode);
    }
  }, [hardThemeMode, themeMode]);

  useSafeLayoutEffect(() => {
    if (themeMode) {
      document.body.className = `${prefixCls}-ui-${themeMode}`;
      document.documentElement.style.setProperty(`--${prefixCls}-ui-color-mode`, themeMode);
    }
    return () => {};
  }, [themeMode, prefixCls]);

  return { themeMode, setThemeModeMiddleware };
};

export default useThemeModeSync;
