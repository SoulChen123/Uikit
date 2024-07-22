export interface IAlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "type"> {
  message?: React.ReactNode;
  description?: React.ReactNode;
  type?: "success" | "info" | "warn" | "error";
  showIcon?: boolean;
  closable?: boolean;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
