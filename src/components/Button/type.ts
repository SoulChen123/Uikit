export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The theme color
   */
  colorScheme?: "default" | "primary" | "danger" | "info" | "warn";

  /**
   * The button component style type
   */
  variant?: "contained" | "outlined" | "text";

  /**
   * Start loading spin animation
   */
  loading?: boolean;

  size?: "extra-large" | "large" | "middle" | "small" | "extra-small";

  /**
   * @description Option to adjust button width to its parent width
   * @default false
   */
  block?: boolean;
}
