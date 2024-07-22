export interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * open modal control
   */
  isOpen?: boolean;

  /**
   * modal cancel callback
   */
  onCancel?: (e: boolean) => void;

  /**
   * modal body width
   */
  width?: number;

  /**
   * mask cancel control
   */
  isMaskCancel?: boolean;

  /**
   * display cancel btn control
   */
  isCancelBtn?: boolean;

  /**
   * display title node control
   */
  renderTitle?: React.ReactNode;

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

  removeScrollEnabled?: boolean;

  /** mobile full screen */
  isFullScreen?: boolean;
}
