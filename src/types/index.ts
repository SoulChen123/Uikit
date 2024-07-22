import { LANGUAGES } from "./enum";

// 删除原类型的某个字段
export type Rewrite<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

// 覆盖原类型的某个类型字段
export type Overwrite<T, U> = Rewrite<T, U> & U;

export interface IPagination {
  pageNum: number;
  pageSize: number;
}

export interface ITableData<T> {
  data?: T[];
  total: number;
}

export type IResponse<T> = {
  code: string;
  data: T;
  message: string | null;
  success: boolean;
  event: null;
};

export type IResult<T> = Rewrite<IResponse<T>, { data: T }>;

export type IThemeMode = "light" | "dark";

export type ILocale = keyof typeof LANGUAGES;

export type INetwork = "online" | "offline";

export interface IGeeTest {
  challenge: string;
  gt: string;
  success: number;
  new_captcha: boolean;
}

export interface IUser {
  accountName: string;
  accountId: string;
  email: string;
  enableTfa: boolean;
  loginId: string;
  mainEmail: string;
  mainAccountId: string;
  mainLogin: boolean;
  token: string;
  type: string;
  sourceType?: string;
  uiSettings?: any;
  accountType?: string;
  unusualIpAndDevice?: boolean;
  tfaTypes: string[];
  kycOpened: boolean;
  intercomSecret: string;
  tradingType: "STANDARD" | "PORTFOLIO";
}

export interface IKYCPermissions {
  accountId: number;
  kycOpened: boolean;
  location?: string;
  functionLimits: {
    name: "deposit" | "withdrawal" | "spotTrade" | "perpTrade" | "visit" | "register";
    enable: boolean;
    limitCoins?: string[];
  }[];
}

export interface IAccounts {
  accounts: {
    accountId: string;
    accountKey: string;
    accountName: string;
    accountStatus: string;
    canTrade: boolean;
    canWithdraw: boolean;
    isMainAccount: boolean;
    tradingType: "STANDARD" | "PORTFOLIO";
  };
  defaultAccount: boolean;
  loginId: string;
  loginKey: string;
}

export interface IRecaptchaHeaders {
  "g-recaptcha-response": string;
  "x-user-action": string;
}

export interface IBanner {
  bannerId: string;
  color: string;
  content: string;
  font: string;
  link: string;
  placement: "top" | "bottom";
}

export interface ICoinBalance {
  availableBalance: string;
  reserved: string;
  totalBalance: string;
}

export interface ILendPrams {
  amount: string;
  poolId: number;
}
export interface IltvSettings {
  coin: string;
  initialLtv: string;
  maintainanceLtv: string;
  isCollateral: string;
  type: string;
}
export interface ILendPool {
  poolId: number;
  lendingPoolType: "claim" | "crypto";
  stakedAmount: string;
  minRate: string;
  maxRate: string;
  apr: string;
  hourlyRate: string;
  ltvSettings: IltvSettings[];
  utilization: string;
}

export interface IRedeemPool {
  totalAmount: string;
  availableCollateralValue: string;
}

export interface IUserInfo {
  accountId: string;
  accountName: string;
  accountSource: string;
  accountType: string;
  agreeMoonPay?: string;
  bindEmail?: string;
  copperAccount?: string;
  enableTfa: boolean;
  enableWithdrawalWhiteList: boolean;
  gsp: boolean;
  intercomSecret: string;
  isMainAccount: boolean;
  loginId: string;
  loginName: string;
  mainAccountId: string;
  publicAddress: string;
  sourceType?: string;
  tfaType?: string;
  tfaTypes?: string[];
  tradingType: string;
  usKycInfo?: string;
  usStatus?: string;
  nickName: string;
  permission: {
    canTrade: boolean;
    canWithdraw: boolean;
  };
  shareCodeInfoResps: {
    shareCode: string;
    rewardRatio: number;
  }[];
  tfaProtected: {
    isLogin: boolean;
    isLoginAndManagement: boolean;
    isModifications: boolean;
    isWithdraw: boolean;
  };
  tradingFeeLevel: {
    autoExpired: string;
    expiredDate: string;
    lastUpdated: number;
    marker: number;
    mmDate: string;
    specialVipLevel: string;
    taker: number;
    thirtyDayVolumeLevel: string;
    totalBalance: number;
    vipLevel: number;
    vipType: string;
    volume: number;
  };
}

export type IQRCodeStatus = "WAITING" | "IN_CONFIRMATION" | "IDENTIFIED" | "EXPIRE";
