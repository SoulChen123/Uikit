export type ISortDirection = "ascend" | "descend" | null;

export interface ISortProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * @description "ascend" 0-100 ｜ “descend” 100-0
   */
  defaultSortDirection?: ISortDirection;
  sortDirection?: ISortDirection;
  sortDirections?: ISortDirection[];
  onSort?: (sortDirection?: ISortDirection) => void;
  onSortMounted?: (sortDirection?: ISortDirection) => void;
}
