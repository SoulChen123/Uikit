export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  beforeNode?: React.ReactNode;
  afterNode?: React.ReactNode;
  size?: "large" | "middle" | "small";
  as?: "textarea";
}
