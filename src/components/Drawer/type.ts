export interface IDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * open drawer control
   */
  isOpen?: boolean;

  /**
   * drawer cancel callback
   */
  onCancel?: (e: boolean) => void;

  /**
   * The direction of the drawer
   */
  placement?: "left" | "right" | "bottom" | "top";

  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;

  destroyOnClose?: boolean;

  zIndex?: number;
}
