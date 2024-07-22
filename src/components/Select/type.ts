import { Rewrite } from "../../types";

export interface ISelectContext {
  value?: React.Key;
  setValue?: React.Dispatch<React.SetStateAction<React.Key | undefined>>;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  allowClear?: boolean;
  size?: "large" | "middle" | "small";
}

export interface ISelectProps extends Rewrite<React.HTMLAttributes<HTMLDivElement>, { onChange: any }> {
  placeholder?: string;

  value?: React.Key;

  defaultValue?: React.Key;

  search?: boolean;

  onSearch?: (e: string) => void;

  onChange?: (e?: React.Key) => void;

  allowClear?: boolean;

  /**
   * Whether to display
   */
  isOpen?: boolean;

  defaultOpen?: boolean;

  /**
   * Whether to display arrow
   */
  arrowIcon?: React.ReactNode;

  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;

  dropdownStyle?: React.CSSProperties;

  dropdownClassName?: string;

  onOpenChange?: (e: boolean) => void;

  destroyOnClose?: boolean;

  zIndex?: number;

  placement?: "bottom" | "bottom-left" | "bottom-right" | "top" | "top-left" | "top-right";

  children?: React.ReactElement<ISelectOptionProps>[] | React.ReactElement<ISelectOptionProps>;

  disabled?: boolean;

  error?: React.ReactNode;

  prompt?: React.ReactNode;

  size?: "large" | "middle" | "small";
}

export interface ISelectOptionProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: React.Key;
  disabled?: boolean;
}
