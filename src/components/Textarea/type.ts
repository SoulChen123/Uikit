import { IInputItemProps } from "../InputItem/type";

export type ITextareaProps = Omit<IInputItemProps, "as" | "afterNode" | "beforeNode"> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
