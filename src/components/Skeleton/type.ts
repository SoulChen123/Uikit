export interface ISkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  animation?: boolean;
  /**
   * max is 100, default as [40, 100, 100, 50]
   */
  width?: (number | string)[];
}
