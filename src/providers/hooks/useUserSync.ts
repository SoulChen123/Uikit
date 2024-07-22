import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../types";
import pubsub from "pubsub-js";
import useSafeLayoutEffect from "../../hooks/useSafeLayoutEffect";
import { toast } from "react-toastify";
import { POPOVER, TOAST_ID } from "../../components/Toast/type";
import { checkToken } from "../../services/requests";
import Cookies from "js-cookie";
import { useDocumentVisibility, useUpdateEffect } from "ahooks";

export const getUserFromLS = (): IUser | null => {
  try {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage) as IUser;
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

const useUserSync = () => {
  const [user, setUser] = useState<IUser | null>();

  const [loading, setLoading] = useState(true);

  const documentVisibility = useDocumentVisibility();

  useSafeLayoutEffect(() => {
    const user = getUserFromLS();
    if (user) {
      (async () => {
        const { success } = await checkToken();
        if (success) {
          setUser(user);
        }
        setLoading(false);
      })();
    } else {
      setUser(user);
      setLoading(false);
    }
    return () => {};
  }, []);

  useUpdateEffect(() => {
    const user = getUserFromLS();
    if (user && documentVisibility !== "hidden") {
      (async () => {
        const { success } = await checkToken();
        if (success) {
          Cookies.set("token", user.token, {
            secure: true,
            expires: 30,
            sameSite: "Lax"
          });
        }
      })();
    }
  }, [documentVisibility]);

  const setUserMiddleware = useCallback((_user?: IUser | null) => {
    try {
      if (typeof _user === "undefined") {
        localStorage.removeItem("user");
        Cookies.remove("token");
      } else {
        localStorage.setItem("user", JSON.stringify(_user));
        if (_user?.token) {
          Cookies.set("token", _user.token, {
            secure: true,
            expires: 30,
            sameSite: "Lax"
          });
        } else {
          Cookies.remove("token");
        }
      }

      setUser(_user);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useSafeLayoutEffect(() => {
    pubsub.subscribe("user", (target, value) => {
      setUserMiddleware(value);
      if (!value) {
        if (typeof user !== "undefined") {
          // toast.warn("Your login has expired, please log in again", {
          //   toastId: TOAST_ID.PERMISSION_DENIED,
          //   containerId: POPOVER.NOTIFICATION
          // });
        }
        console.warn("User status - login has expired");
      }
    });
    return () => {
      pubsub.unsubscribe("user");
    };
  }, [user]);

  return { user, setUserMiddleware, loading };
};

export default useUserSync;
