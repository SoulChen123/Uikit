export enum TRADING_TYPE {
  "INVERSE_BTC" = "Inverse-BTC",
  "INVERSE_ETH" = "Inverse-ETH",
  "LINEAR" = "Linear-USD",
  "TRADING" = "Trading"
}

export enum LANGUAGES {
  "en" = "English",
  "zh-CN" = "简体中文",
  "fr" = "Français",
  "ko" = "한국인",
  "ru" = "Русский",
  "es" = "Español",
  "vi" = "Tiếng Việt"
}

// export enum I18N_MODAL_TITLE {
//   "en" = "Language and Region",
//   "zh-CN" = "语言和地区"
// }

// export enum I18N_MODAL_SUB_TITLE {
//   "en" = "Choose a language and region",
//   "zh-CN" = "选择语言和地区"
// }

// export enum I18N_WALLET {
//   "en" = "Wallet",
//   "zh-CN" = "钱包"
// }

// export enum I18N_ORDER {
//   "en" = "Order",
//   "zh-CN" = "订单"
// }

// export enum I18N_SUB_ACCOUNT {
//   "en" = "Sub Account",
//   "zh-CN" = "子账号"
// }

// export enum I18N_API_KEY {
//   "en" = "API Management",
//   "zh-CN" = "API管理"
// }

// export enum I18N_LOGOUT {
//   "en" = "Log Out",
//   "zh-CN" = "退出"
// }

// export enum I18N_LOGIN {
//   "en" = "Login",
//   "zh-CN" = "登录"
// }

// export enum I18N_REGISTER {
//   "en" = "Register",
//   "zh-CN" = "注册"
// }

// export enum I18N_PRODUCTS {
//   "en" = "Products",
//   "zh-CN" = "产品"
// }

// export enum I18N_DOWNLOAD {
//   "en" = "Download",
//   "zh-CN" = "下载"
// }

// events

// pubsub network
export enum NETWORK_STATUS {
  EVENT = "network",
  OFFLINE = "offline",
  ONLINE = "online"
}

export enum OFFLINE_MODAL_STATUS {
  EVENT = "offlineModal",
  OPEN = "open",
  CLOSE = "close"
}

export enum RECAPTCHA_SCRIPT_LOAD {
  EVENT = "recaptcha_script_load",
  COMPLETED = "completed",
  FAILED = "failed"
}

export enum BANNER {
  EVENT = "banner_update",
  REQUEST = "request"
}
