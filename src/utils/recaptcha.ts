import { toast } from "react-toastify";
import { POPOVER, TOAST_ID } from "../components/Toast";
import { getRecaptchaKey } from "../services/requests";

export const onRecaptchaVerify = async (
  key: string,
  action: string,
  onSuccess?: (token: string, action: string) => void,
  onError?: (err: unknown) => void
) => {
  try {
    let _key = key;
    if (!_key) {
      const res = await getRecaptchaKey();
      if (res.success) {
        _key = res.data;
      } else {
        throw new Error("recaptcha error occurred");
      }
    }
    window.grecaptcha.enterprise.ready(() => {
      window.grecaptcha.enterprise.execute(_key, { action: action }).then(
        async (token: string) => {
          if (token) {
            onSuccess?.(token, action);
          }
        },
        (error: any) => {
          console.error(error);
        }
      );
    });
  } catch (err: any) {
    toast.error(err, {
      containerId: POPOVER.MESSAGE,
      updateId: TOAST_ID.RECAPTCHA_ERROR,
      toastId: TOAST_ID.RECAPTCHA_ERROR
    });
    onError?.(err);
  }
};
