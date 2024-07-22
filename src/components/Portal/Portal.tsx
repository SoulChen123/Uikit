import { useTheme } from "@emotion/react";
import React, { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import useSafeLayoutEffect from "../../hooks/useSafeLayoutEffect";
import { IPortalProps } from "./type";

const Portal = forwardRef<HTMLDivElement | null, IPortalProps>(
  ({ children, container, appendToParentPortal, appear, ...props }, ref) => {
    const { prefixCls } = useTheme();
    const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

    useSafeLayoutEffect(() => {
      if (appear && !parentElement) {
        if (!container) {
          setParentElement(document.body);
        } else {
          setParentElement(container.current);
        }
      }

      if (parentElement) {
        if (!container) {
          setParentElement(document.body);
        } else {
          setParentElement(container.current);
        }
      }
    }, [container, parentElement, appear]);

    if (appendToParentPortal)
      return (
        <div className={`${prefixCls}-portal`} {...props} ref={ref}>
          {children}
        </div>
      );

    return parentElement
      ? createPortal(
          <div className={`${prefixCls}-portal`} {...props} ref={ref}>
            {children}
          </div>,
          parentElement
        )
      : null;
  }
);

Portal.defaultProps = {
  appendToParentPortal: false,
  appear: false
};

export default Portal;
