import type { TooltipProps as RcTooltipProps, TooltipRef as RcTooltipRef } from "rc-tooltip/lib/Tooltip";

export interface ITooltipProps
  extends Omit<
    RcTooltipProps,
    | "prefixCls"
    | "transitionName"
    | "animation"
    | "motion"
    | "visible"
    | "defaultVisible"
    | "onVisibleChange"
    | "afterVisibleChange"
    | "children"
    | "destroyTooltipOnHide"
    | "getTooltipContainer"
  > {
  placement?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";

  isOpen?: RcTooltipProps["visible"];
  defaultOpen?: RcTooltipProps["defaultVisible"];
  onOpenChange?: RcTooltipProps["onVisibleChange"];
  afterOpenChange?: RcTooltipProps["afterVisibleChange"];
  children?: React.ReactNode;

  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;

  destroyOnClose?: boolean;

  wrapperStyle?: React.CSSProperties;
}

export type ITooltipRef = RcTooltipRef;
