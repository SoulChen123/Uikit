import { IInputProps } from "../Input";

export interface IInputItemProps extends IInputProps {
  error?: React.ReactNode;
  prompt?: React.ReactNode;
}
