import React, { createContext, useEffect, useRef, useState } from "react";
import { getRecaptchaKey } from "../services/requests";
import { onRecaptchaVerify } from "../utils/recaptcha";
import { IRecaptchaContent } from "./type";
import pubsub from "pubsub-js";
import { RECAPTCHA_SCRIPT_LOAD } from "../types/enum";
import { POPOVER, toast, TOAST_ID } from "../components/Toast";

type TProps = {
  children?: React.ReactNode;
};

export const Context = createContext<IRecaptchaContent>({
  key: "",
  onRecaptchaVerify: () => {}
});

const RecaptchaProvider: React.FC<TProps> = ({ children }) => {
  const [key, setKey] = useState<string>("");
  const status = useRef<RECAPTCHA_SCRIPT_LOAD.COMPLETED | RECAPTCHA_SCRIPT_LOAD.FAILED>();

  useEffect(() => {
    (async () => {
      const res = await getRecaptchaKey();
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.recaptcha.net/recaptcha/enterprise.js?render=${res.data}`;
      script.id = "hs-script-loader";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        status.current = RECAPTCHA_SCRIPT_LOAD.COMPLETED;
        pubsub.publish(RECAPTCHA_SCRIPT_LOAD.EVENT, RECAPTCHA_SCRIPT_LOAD.COMPLETED);
      };
      script.onerror = () => {
        console.error("recaptcha script load failed");
        status.current = RECAPTCHA_SCRIPT_LOAD.FAILED;
        pubsub.publish(RECAPTCHA_SCRIPT_LOAD.EVENT, RECAPTCHA_SCRIPT_LOAD.FAILED);
      };
      document.body.appendChild(script);
      setKey(res.data);

      return () => {
        document.body.removeChild(script);
      };
    })();
  }, []);

  const recaptchaVerifyHooks = (
    action: string,
    onSuccess?: (token: string, action: string) => void,
    onError?: (err: unknown) => void
  ) => {
    if (status.current === RECAPTCHA_SCRIPT_LOAD.COMPLETED) {
      onRecaptchaVerify(key, action, onSuccess, onError);
      return;
    }
    toast.error("recaptcha error occurred", {
      containerId: POPOVER.MESSAGE,
      updateId: TOAST_ID.RECAPTCHA_ERROR,
      toastId: TOAST_ID.RECAPTCHA_ERROR
    });
    onError?.(`recaptcha not ready, status: ${status.current}`);
  };

  return (
    <Context.Provider
      value={{
        key,
        onRecaptchaVerify: recaptchaVerifyHooks
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default RecaptchaProvider;
