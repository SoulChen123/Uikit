import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import merge from "lodash/merge";
import React, { createContext, Fragment, useCallback } from "react";
import { useMemo } from "react";
import useSafeLayoutEffect from "../hooks/useSafeLayoutEffect";
import theme from "../theme";
import ResetCSS from "../theme/ResetCSS";
import { IThemeMode } from "../types";
import useThemeModeSync from "./hooks/useThemeModeSync";
import { IThemeContext, IThemeProviderProps } from "./type";
import Message from "../components/Toast/Message/Message";
import Notification from "../components/Toast/Notification/Notification";
import ToastSlideAnimation from "../components/Toast/ToastSlideAnimation";
import ToastCSS from "../theme/ToastCSS";
import RobotoCSS from "../theme/RobotoCSS";

export const Context = createContext<IThemeContext>({
  themeMode: "dark",
  setThemeMode: () => {}
});

const ThemeProvider: React.FC<IThemeProviderProps & { children?: React.ReactNode }> = ({
  children,
  hardThemeMode,
  themeCookie,
  mergeTheme,
  hideMessageContainer,
  hideNotificationContainer,
  messageContainerProps,
  notificationContainerProps,
  isNoReset,
  prefixCls = "oxfun"
}) => {
  const { themeMode, setThemeModeMiddleware } = useThemeModeSync(hardThemeMode, themeCookie, prefixCls);

  const emit = useCallback(({ key, newValue }: StorageEvent) => {
    switch (key) {
      case "theme":
        setThemeModeMiddleware(newValue as IThemeMode);
        break;

      default:
        break;
    }
  }, []);

  useSafeLayoutEffect(() => {
    window.addEventListener("storage", emit);
    return () => {
      window.removeEventListener("storage", emit);
    };
  }, []);

  const themeObject = useMemo(() => {
    const pre = theme(themeMode === "dark", prefixCls);
    const next = mergeTheme ? mergeTheme(themeMode === "dark") : {};

    return merge(pre, next);
  }, [themeMode]);

  return (
    <Context.Provider value={{ themeMode, setThemeMode: setThemeModeMiddleware, hardThemeMode, themeCookie }}>
      <EmotionThemeProvider theme={themeObject}>
        <Fragment>
          <RobotoCSS />
          {!isNoReset && <ResetCSS />}
          <ToastCSS />
          {children}

          <Fragment>
            <ToastSlideAnimation />
            {!hideMessageContainer && <Message {...messageContainerProps} />}
            {!hideNotificationContainer && <Notification {...notificationContainerProps} />}
          </Fragment>
        </Fragment>
      </EmotionThemeProvider>
    </Context.Provider>
  );
};

export default ThemeProvider;
