export interface ITabsContext {
  activeKey?: string;
  setActiveKey?: (v: React.SetStateAction<string>, ...args: any[]) => void;
}
export interface ITabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (e: string) => void;
  rightNode?: React.ReactNode;
  leftNode?: React.ReactNode;
  children: React.ReactNode;
}

export interface ITabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  tab?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
}
