import Cookies from "js-cookie";
import { IUser } from "../types";
import { isBrowser } from "./dom";

export const getUserFromLS = () => {
  if (isBrowser) {
    try {
      if (window.localStorage) {
        const userFromJS = localStorage.getItem("user");
        return userFromJS ? (JSON.parse(userFromJS) as IUser) : null;
      }
    } catch (e) {
      console.error(e);
      throw new Error("UIKit: localStorage is not available. User persistence might not work as expected");
    }
  }
};

export const getLocaleFromLS = () => {
  if (isBrowser) {
    try {
      if (window.localStorage) {
        const userFromJS = localStorage.getItem("locale");
        return userFromJS;
      }
    } catch (e) {
      console.error(e);
      throw new Error("UIKit: localStorage is not available. Locale persistence might not work as expected");
    }
  } else {
    return Cookies.get("NEXT_LOCALE");
  }
};
