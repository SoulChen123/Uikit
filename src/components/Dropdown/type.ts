import React from "react";

export type IDropdownPlacement = "bottom" | "bottom-left" | "bottom-right" | "top" | "top-left" | "top-right";

export interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  overlay?: React.ReactNode;

  /**
   * Whether to display
   */
  isOpen?: boolean;

  defaultOpen?: boolean;
  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;

  overlayStyle?: React.CSSProperties;

  overlayClassName?: string;

  /**
   * Behavior that triggers the Dropdown
   */
  trigger?: "hover" | "click";

  onOpenChange?: (e: boolean) => void;

  destroyOnClose?: boolean;

  zIndex?: number;

  placement?: IDropdownPlacement;

  arrowIcon?: React.ReactNode;

  // offsetY?: number;
}
