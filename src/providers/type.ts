import { IToastContainerProps } from "../components/Toast/type";
import { IAccounts, ILocale, INetwork, IThemeMode, IUser, IUserInfo } from "../types";

/**
 * Main Provider
 */

export type IProviderProps = {
  nextLocale?: ILocale;
};

export type IContext = {
  locale: ILocale;
  /**
   * @async cookie localstorage
   */
  setLocale: (locale: ILocale) => void;

  /**
   * @description first screen
   */
  checkTokenLoading?: boolean;

  user?: IUser | null;
  /**
   * @async localstorage
   */
  setUser: (user: IUser | null) => void;

  isSubAccountOpen?: boolean;

  setSubAccountOpen?: (e: boolean) => void;

  fetchLogout: () => Promise<boolean> | undefined;

  accounts?: IAccounts[];

  fetchAccounts: () => void;

  onSwitchAccount?: (accountId: string) => Promise<boolean>;

  userInfo?: IUserInfo;

  fetchUserInfo: () => void;

  network?: INetwork;

  isConnectWalletModal?: boolean;

  setConnectWalletModal?: React.Dispatch<React.SetStateAction<boolean>>;

  i18nModal: boolean;

  setI18nModal: (e: boolean) => void;

  qrCodeModal: boolean;

  setQRCodeModal: (e: boolean) => void;
};

export type IRecaptchaContent = {
  key: string;
  onRecaptchaVerify: (
    action: string,
    onSuccess?: (token: string, action: string) => void,
    onError?: (err: unknown) => void
  ) => void;
};

/**
 * Theme Provider
 */

export type IThemeProviderProps = {
  hardThemeMode?: IThemeMode;
  themeCookie?: IThemeMode;
  mergeTheme?: (isDark: boolean) => any;
  hideMessageContainer?: boolean;
  hideNotificationContainer?: boolean;
  messageContainerProps?: IToastContainerProps;
  notificationContainerProps?: IToastContainerProps;
  isNoReset?: boolean;
  /**
   * default as oxfun
   */
  prefixCls?: string;
};

export type IThemeContext = IThemeProviderProps & {
  themeMode: IThemeMode;
  /**
   * @async cookie localstorage
   */
  setThemeMode: (theme: IThemeMode) => void;
};
