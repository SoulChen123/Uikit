export interface IPaginationProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "onChange"> {
  disabled?: boolean;
  defaultPageNum?: number;
  pageNum?: number;
  total?: number;
  defaultPageSize?: number;
  pageSize?: number;
  onChange?: (pageNum: IPaginationProps["defaultPageNum"], pageSize: IPaginationProps["pageSize"]) => void;
}
