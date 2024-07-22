import { ClassNames, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useControllableValue } from "ahooks";
import RcTooltip from "rc-tooltip";
import type { TooltipRef as RcTooltipRef } from "rc-tooltip/lib/Tooltip";
import React, { forwardRef, useRef } from "react";
import { __DEV__ } from "../../config";
import { cx } from "../../utils";
import { isFragment, isValidElement } from "../../utils/reactNode";
import { Portal } from "../Portal";
import { ITooltipProps, ITooltipRef } from "./type";
import useStyles from "./useStyles";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Tooltip = forwardRef<ITooltipRef, ITooltipProps>((props, ref) => {
  const {
    children,
    onOpenChange,
    afterOpenChange,
    destroyOnClose,
    overlayClassName,
    appendToParentPortal,
    container,
    wrapperStyle,
    ...restProps
  } = props;

  const [open, setOpen] = useControllableValue(props, {
    valuePropName: "isOpen",
    defaultValuePropName: "onOpenChange",
    trigger: ""
  });

  const { prefixCls } = useTheme();

  const portalRef = useRef<HTMLDivElement>(null);

  const child = isValidElement(children) && !isFragment(children) ? children : <span>{children}</span>;

  // ============================== Ref ===============================
  const tooltipRef = React.useRef<RcTooltipRef>(null);

  const forceAlign = () => {
    tooltipRef.current?.forceAlign();
  };

  React.useImperativeHandle(ref, () => ({
    forceAlign
  }));

  return (
    <Wrapper className={cx(`${prefixCls}-tooltip-wrapper`)} data-opened={open ? "" : undefined} style={wrapperStyle}>
      <Portal appear={open} appendToParentPortal={appendToParentPortal} container={container} ref={portalRef} />
      <ClassNames>
        {({ css, cx, theme }) => {
          const hashId = useStyles(theme, css);

          return (
            <RcTooltip
              {...restProps}
              destroyTooltipOnHide={destroyOnClose}
              prefixCls={`${prefixCls}-tooltip`}
              visible={open}
              onVisibleChange={(e) => {
                setOpen(e);
                onOpenChange?.(e);
              }}
              afterVisibleChange={afterOpenChange}
              overlayClassName={cx(hashId, overlayClassName)}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              getTooltipContainer={() => portalRef.current!}
              motion={{
                motionName: `${prefixCls}-tooltip-fade`,
                motionDeadline: 1000
              }}
              ref={tooltipRef}
            >
              {child}
            </RcTooltip>
          );
        }}
      </ClassNames>
    </Wrapper>
  );
});

Tooltip.defaultProps = {
  placement: "top",
  mouseEnterDelay: 0.2,
  mouseLeaveDelay: 0.2
};

if (__DEV__) {
  Tooltip.displayName = "Slider";
}

export default Tooltip;
