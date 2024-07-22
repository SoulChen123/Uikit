import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { IEmptyProps } from "./type";
import { useTheme } from "../../hooks";
import { cx } from "../../utils";
import NO_DATA from "./NO_DATA";
import NO_NETWORK from "./NO_NETWORK";
import NO_SUB_ACCOUNT from "./NO_SUB_ACCOUNT";

const Wrapper = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 32
  };
});

const Description = styled.span(({ theme }) => {
  return {
    paddingTop: 16,
    fontSize: 12,
    color: theme.system.gray[6]
  };
});

const Empty = forwardRef<HTMLDivElement, IEmptyProps>(({ description, type, className, ...props }, ref) => {
  const { prefixCls } = useTheme();

  return (
    <Wrapper className={cx(`${prefixCls}-empty`, className)} ref={ref} {...props}>
      <span className={`${prefixCls}-empty-img`}>
        {type === "NO_DATA" && <NO_DATA />}
        {type === "NO_NETWORK" && <NO_NETWORK />}
        {type === "NO_SUB_ACCOUNT" && <NO_SUB_ACCOUNT />}
      </span>
      {description && <Description className={`${prefixCls}-empty-description`}>{description}</Description>}
    </Wrapper>
  );
});

Empty.defaultProps = {
  type: "NO_DATA"
};

export default Empty;
