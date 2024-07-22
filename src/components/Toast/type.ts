import { ToastContainerProps } from "react-toastify";

export enum POPOVER {
  MESSAGE = "toast-message",
  NOTIFICATION = "toast-notification"
}

export enum TOAST_ID {
  PERMISSION_DENIED = "401",
  CREATE_WEBSOCKET_FAILED = "Create websocket failed",
  WEBSOCKET_NOT_READEY = "WebSocket not ready",
  WEBSOCKET_CONNECTING = "WebSocket is connecting, please try again later",
  REQUEST_EXCEPTION = "Request Exception",
  RECAPTCHA_ERROR = "Recaptcha Error"
}

export type IToastContainerProps = Omit<
  ToastContainerProps,
  | "transition"
  | "icon"
  | "className"
  | "toastClassName"
  | "progressClassName"
  | "bodyClassName"
  | "enableMultiContainer"
  | "containerId"
>;
