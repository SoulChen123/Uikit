export interface ISwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  value?: string;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  // [checked, no check]
  controlChildren?: React.ReactNode[];
}
