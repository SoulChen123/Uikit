import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { forwardRef, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { cx } from "../../utils/share";
import { IProgressLineProps } from "./type";

const Wrapper = styled.div`
  width: 100%;
  height: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.system.blueGray[4]};
`;

const Percent = styled.div<{
  percent?: number;
  state: TransitionStatus;
  colorScheme: IProgressLineProps["colorScheme"];
}>`
  transition: all 1s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
  ${({ state, percent }) => {
    switch (state) {
      case "entered":
        return { width: (percent ? percent : 0) + "%" };
      default:
        return { width: 0 };
    }
  }}
  height: 100%;
  position: relative;
  background: ${({ theme, colorScheme }) => {
    if (colorScheme === "primary") return theme.system.primary[5];
    if (colorScheme === "gradient") return "linear-gradient(90deg, #1DA096 0.89%, #E8BD0B 51.35%, #C7274C 100%)";
  }};
`;

const Line = forwardRef<HTMLDivElement, IProgressLineProps>(({ className, percent, colorScheme, ...props }, ref) => {
  const { prefixCls } = useTheme();
  const percentRef = useRef(null);

  return (
    <Wrapper className={cx(`${prefixCls}-line-progress`, className)} {...props} ref={ref}>
      <Transition in={true} timeout={{ enter: 50 }} appear unmountOnExit nodeRef={percentRef}>
        {(state) => (
          <Percent
            className={`${prefixCls}-line-progress-percent`}
            ref={percentRef}
            state={state}
            percent={percent}
            colorScheme={colorScheme}
          />
        )}
      </Transition>
    </Wrapper>
  );
});

Line.defaultProps = {
  percent: 0,
  colorScheme: "primary"
};

export default Line;
