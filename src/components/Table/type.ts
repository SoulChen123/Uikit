import { ISortDirection, ISortProps } from "../Sort";

export type ITableAlign = "left" | "right" | "center";
export type ITableFixed = "left" | "right";

export type AnyObject = Record<PropertyKey, any>;
export interface ITableColumn<RecordType> {
  align?: ITableAlign;
  className?: string;
  style?: React.CSSProperties;
  render?: (value: any, record: RecordType, index: number) => React.ReactNode;
  title: React.ReactNode;
  // dataIndex: string;
  key: string;
  width?: number;
  fixed?: ITableFixed;
  sort?: boolean;

  /**
   * @default
   * cloneData.sort((a, b) => {
   *        const compare = a[sortState.key] > b[sortState.key] ? 1 : -1;
   *       return sortState.direction === "ascend" ? compare : -compare;
   *    });
   * @param null means no local sorting is used
   */
  sortCompareFn?: ((a: RecordType, b: RecordType) => number) | null;

  /**
   * @description mobile screen config
   */
  listConfig?: {
    hidden?: boolean;
    /**
     * @description listconfig render priority > render
     */
    render?: (value: any, record: RecordType, index: number) => React.ReactNode;
    /**
     * @description table list title
     */
    customTitle?: (value: any, record: RecordType, index: number) => React.ReactNode | true;
  };
}

export type ITableColumns<RecordType> = ITableColumn<RecordType>[];

export interface ITableContext<RecordType>
  extends Pick<ITableProps<RecordType>, "columns" | "rowKey" | "size" | "scroll" | "listConfig" | "empty"> {
  data?: Readonly<ITableProps<RecordType>["dataSource"]>;
  sortState?: {
    key: string;
    direction: ISortDirection;
    compareFn?: ITableColumn<RecordType>["sortCompareFn"];
  };
  setSortState?: React.Dispatch<
    React.SetStateAction<
      | {
          key: string;
          direction: ISortDirection;
          compareFn?: ITableColumn<RecordType>["sortCompareFn"];
        }
      | undefined
    >
  >;
}

export interface ITableProps<RecordType> extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  dataSource?: RecordType[];
  columns?: ITableColumns<RecordType>;
  rowKey: keyof RecordType;
  size?: "large" | "middle" | "small";
  loading?: boolean;
  empty?: React.ReactNode;
  scroll?: {
    x?: React.CSSProperties["minWidth"];
    y?: React.CSSProperties["maxHeight"];
  };

  /**
   * @description mobile screen config
   */
  listConfig?: {
    y?: React.CSSProperties["maxHeight"];
  };

  onSort?: (direction?: ISortProps["sortDirection"], field?: string) => void;

  // onChange?: (
  //   sort?: {
  //     direction?: ISortProps["sortDirection"];
  //     field?: string;
  //   },
  //   extra?: {
  //     currentDataSource?: RecordType[];
  //     action?: "sort";
  //   }
  // ) => void;
}
