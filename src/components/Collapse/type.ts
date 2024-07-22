export type ICollapseData = {
  key: string;
  title?: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
};

export interface ICollapseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "children"> {
  dataSource?: ICollapseData[];
  expandIcon?: React.ReactNode;
  expandIconPosition?: "start" | "end";
  accordion?: boolean;
  defaultActiveKey?: string[];
  activeKey?: string[];
  onChange?: (activeKey: string[]) => void;
}
