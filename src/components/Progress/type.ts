export interface IProgressProps {
  type?: "line";
}

export interface IProgressLineProps extends React.HTMLAttributes<HTMLDivElement> {
  percent?: number;
  colorScheme?: "primary" | "gradient";
}
