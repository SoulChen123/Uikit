import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { forwardRef } from "react";
import { SKELETON_LOADING } from "../../theme/animations";
import { cx } from "../../utils";
import { ISkeletonProps } from "./type";

const Wrapper = styled.div(() => ({
  width: "100%"
}));

const Paragraph = styled.ul(() => ({
  display: "flex",
  flexDirection: "column"
}));

const ParagraphLen = styled.li<{ len: string | number }>(({ len, theme }) => {
  return {
    width: "100%",
    height: 16,
    // borderRadius: 4,
    position: "relative",
    overflow: "hidden",
    marginTop: 16,
    background: theme.system.blueGray[2],
    ":first-of-type": {
      marginTop: 0
    },
    "&[data-animation]": {
      background: theme.system.transparent,
      "::after": {
        content: "''",
        top: 0,
        bottom: 0,
        insetInlineEnd: "-150%",
        insetInlineStart: "-150%",
        position: "absolute",
        background: theme.isDark
          ? "linear-gradient(90deg,#1B1E24 25%, #31353D 37%, #1B1E24 63%)"
          : "linear-gradient(90deg,#F0F1F5 25%,#DCDFE5 37%,#F0F1F5 63%)",
        animationName: SKELETON_LOADING,
        animationDuration: "1.4s",
        animationTimingFunction: "ease",
        animationIterationCount: "infinite"
      }
    },
    ...(typeof len === "number"
      ? len < 100
        ? { width: `${len}%` }
        : {}
      : {
          width: len
        })
  };
});

const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ children, width, loading, animation, className, ...props }, ref) => {
    const { prefixCls } = useTheme();
    return loading ? (
      <Wrapper ref={ref} {...props} className={cx(`${prefixCls}-skeleton`, className)}>
        <Paragraph className={cx(`${prefixCls}-skeleton-paragraph`)}>
          {width?.map((p, i) => (
            <ParagraphLen
              className={cx(`${prefixCls}-skeleton-len`)}
              key={i}
              len={p}
              data-animation={animation ? "" : undefined}
            />
          ))}
        </Paragraph>
      </Wrapper>
    ) : (
      <>{children}</>
    );
  }
);

Skeleton.defaultProps = {
  width: [40, 100, 100, 50]
};

export default Skeleton;
