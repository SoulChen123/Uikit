export interface IInputCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "text" | "number";
  defaultValue?: string;
  fields?: number;
  onUpdated?: (val: string) => void;
  onComplete?: (val: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
}
