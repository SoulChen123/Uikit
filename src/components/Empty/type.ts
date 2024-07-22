export interface IEmptyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "type"> {
  description?: React.ReactNode;
  type?: "NO_SUB_ACCOUNT" | "NO_NETWORK" | "NO_DATA";
}
