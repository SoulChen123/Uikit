import React, { Fragment, useEffect } from "react";
import { ENVIRONMENT } from "../config";
import { useAccount, useUIKit } from "../hooks";
import initIntercom from "../utils/intercom";

type TProps = {
  children?: React.ReactNode;
};

const APP_ID = ENVIRONMENT === "PROD" ? "kb9b4ci4" : "h31iw1nr";

const IntercomProvider: React.FC<TProps> = ({ children }) => {
  const user = useAccount();
  const { locale } = useUIKit();
  useEffect(() => {
    initIntercom(APP_ID);
    window.Intercom("boot", {
      app_id: APP_ID,
      user_id: user.mainAccountId,
      created_at: new Date().getTime(),
      user_hash: user.intercomSecret,
      language_override: locale
    });

    return () => {};
  }, [user, locale]);

  return <Fragment>{children}</Fragment>;
};

export default IntercomProvider;
