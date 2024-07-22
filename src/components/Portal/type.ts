import React from "react";

export interface IPortalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;

  /**
   * true is init
   */
  appear?: boolean;
}
