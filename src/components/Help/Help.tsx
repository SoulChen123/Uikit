import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { forwardRef } from "react";
import { HelpIcon } from "../../icons";
import { Tooltip } from "../Tooltip";
import { IHelpProps, IHelpRef } from "./type";

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.system.gray[7]};
  font-size: 16px;
  cursor: help;
`;

const Help = forwardRef<IHelpRef, IHelpProps>(({ icon, ...props }, ref) => {
  const { prefixCls } = useTheme();
  return (
    <Tooltip ref={ref} overlayInnerStyle={{ maxWidth: 375, wordBreak: "break-word" }} {...props}>
      <Icon className={`${prefixCls}-help-icon`}>{icon ? icon : <HelpIcon />}</Icon>
    </Tooltip>
  );
});

export default Help;
