export interface ICheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  value?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  indeterminate?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export type ICheckboxGroupContext = {
  value?: string[];
  onChange?: (res: string[], event?: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
};

export interface ICheckboxGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">,
    ICheckboxGroupContext {
  children?: React.ReactElement<ICheckboxProps>[] | React.ReactElement<ICheckboxProps>;
  defaultValue?: string[];
}
