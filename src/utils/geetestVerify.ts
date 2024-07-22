import { toast } from "react-toastify";
import { POPOVER } from "../components/Toast/type";
import { geetestValidate } from "../services/requests";

const geetestVerify = (obj: any, data: Object, success: Function, error: Function) => {
  obj.appendTo("#captcha");
  obj
    .onReady(function () {
      obj.verify();
    })
    .onSuccess(() => {
      const result = obj.getValidate();
      const nextData = {
        geetest_challenge: result.geetest_challenge,
        geetest_validate: result.geetest_validate,
        geetest_seccode: result.geetest_seccode,
        clientType: "web",
        ...data
      };
      geetestValidate(nextData)
        .then((resGeestest: any) => {
          if (resGeestest.data.status === "success") {
            success();
          } else {
            toast.error("verification failed", { containerId: POPOVER.MESSAGE });
            obj.reset();
          }
        })
        .catch(() => {
          error();
          toast.error("verification failed", { containerId: POPOVER.MESSAGE });
          obj.reset();
        })
        .finally(() => {
          // error();
          // obj.reset();
        });
    })
    .onClose(() => {
      error();
      toast.warn("please complete verification", { containerId: POPOVER.MESSAGE });
    })
    .onError((err: any) => {
      console.error(err);
      throw new Error("UIKit: geetest is not available, might not work as expected");
    });
};

export default geetestVerify;
