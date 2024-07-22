import React, { createContext, FC, useCallback, useEffect, useState } from "react";
import useLocaleSync from "./hooks/useLocaleSync";
import useUserSync from "./hooks/useUserSync";
import { IProviderProps, IContext } from "./type";
import { LANGUAGES } from "../types/enum";
import { getAccounts, getUserInfo, logout, switchAccountLogin } from "../services/requests";
import { IAccounts, IUserInfo } from "../types";
import useSafeLayoutEffect from "../hooks/useSafeLayoutEffect";
import { ENVIRONMENT, __UIKIT__ } from "../config";
import useNetwork from "../hooks/useNetwork";
import { initGeetest } from "../utils/gt";
import Localization from "./Localization";

typeof window !== "undefined" && initGeetest();

export const Context = createContext<IContext>({
  locale: "en",
  setLocale: () => {},
  setUser: () => {},
  fetchLogout: () => undefined,
  fetchAccounts: () => {},
  i18nModal: false,
  setI18nModal: () => {},
  qrCodeModal: false,
  setQRCodeModal: () => {},
  fetchUserInfo: () => {}
});

const Provider: FC<IProviderProps & { children?: React.ReactNode }> = ({ children, nextLocale }) => {
  if (!ENVIRONMENT) {
    if (__UIKIT__) {
      throw new Error(`UIKit: STORYBOOK_ENV Can not be ${ENVIRONMENT}`);
    } else {
      throw new Error(`UIKit: REACT_APP_ENVIRONMENT or NEXT_PUBLIC_ENVIRONMENT Can not be ${ENVIRONMENT}`);
    }
  }

  const [isConnectWalletModal, setConnectWalletModal] = useState(false);

  const [i18nModal, setI18nModal] = useState(false);

  const [qrCodeModal, setQRCodeModal] = useState(false);

  const { locale, setLocaleMiddleware } = useLocaleSync(nextLocale);

  const { user, setUserMiddleware, loading } = useUserSync();

  const [accounts, setAccounts] = useState<IAccounts[]>();

  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const [isSubAccountOpen, setSubAccountOpen] = useState<boolean>();

  const network = useNetwork();

  const emit = useCallback(({ key, newValue, oldValue }: StorageEvent) => {
    switch (key) {
      case "locale":
        setLocaleMiddleware(newValue as keyof typeof LANGUAGES | null);
        break;
      case "user":
        if (oldValue !== newValue) {
          setUserMiddleware(newValue ? JSON.parse(newValue) : null);
        }
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

  const fetchLogout = useCallback(async () => {
    const { data, success } = await logout();
    if (data && success) {
      setUserMiddleware(null);
      return true;
    }
    return false;
  }, []);

  const fetchAccounts = useCallback(async () => {
    const { data, success } = await getAccounts();
    if (data && success) {
      setAccounts(data.accounts);
    }
  }, []);

  const fetchUserInfo = useCallback(async () => {
    const { data, success } = await getUserInfo();
    if (data && success) {
      setUserInfo(data);
    }
  }, []);

  const onSwitchAccount = useCallback(async (accountId: string) => {
    const { data, success } = await switchAccountLogin(accountId);
    if (success) {
      setUserMiddleware(data);
    }
    return success;
  }, []);

  useEffect(() => {
    if (user?.token) {
      !accounts && fetchAccounts();
    } else {
      setAccounts(undefined);
    }
    return () => {};
  }, [user?.token, accounts]);

  useEffect(() => {
    if (user?.token) {
      fetchUserInfo();
    } else {
      setUserInfo(undefined);
    }
    return () => {};
  }, [user?.token]);

  return (
    <Context.Provider
      value={{
        locale,
        setLocale: setLocaleMiddleware,
        user,
        setUser: setUserMiddleware,
        fetchLogout,
        accounts,
        fetchAccounts,
        onSwitchAccount,
        network,
        checkTokenLoading: loading,
        isSubAccountOpen,
        setSubAccountOpen,
        isConnectWalletModal,
        setConnectWalletModal,
        i18nModal,
        setI18nModal,
        userInfo,
        fetchUserInfo,
        qrCodeModal,
        setQRCodeModal
      }}
    >
      <Localization>{children}</Localization>
    </Context.Provider>
  );
};

export default Provider;
