import { IUser } from "../types";

const formatUserName = (user?: IUser | null) => {
  if (!user) return "";
  if (!user.email.includes("@")) {
    return user.email.substring(0, 6) + "..." + user.email.slice(-4);
  }
  if (user.mainLogin) {
    return user.accountName === user.email
      ? user.email.split("@")[0].slice(0, 2) + "***@" + user.email.split("@")[1]
      : user.email.split("@")[0].slice(0, 2) +
          "***@" +
          user.email.split("@")[1] +
          "/" +
          (user.accountName.length > 4 ? user.accountName.slice(0, 4) + "..." : user.accountName);
  } else {
    return user.email.indexOf("@") !== -1
      ? user.email.split("@")[0].slice(0, 2) + "***@" + user.email.split("@")[1]
      : user.email.length > 7
      ? user.email.slice(0, 4) + "***" + user.email.slice(-4)
      : user.email + (user.accountName.length > 4 ? user.accountName.slice(0, 4) + "..." : user.accountName);
  }
};

export default formatUserName;
