export interface ILoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;

  zIndex?: number;

  opacity?: number;

  type?: "NORMAL" | "LOGO";

  delay?: number;
}
