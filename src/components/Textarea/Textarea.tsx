import styled from "@emotion/styled";
import React, { PropsWithoutRef, RefAttributes } from "react";
import { forwardRef } from "react";
import { InputItem, IInputItemProps } from "../InputItem";
import { ITextareaProps } from "./type";

const Wrapper = styled(InputItem)`
  .${({ theme }) => theme.prefixCls}-textarea-wrapper {
    padding: 0;
    height: auto;
  }
  .${({ theme }) => theme.prefixCls}-textarea {
    min-height: 72px;
    max-width: 100%;
    resize: vertical;
    ${({ size }) => {
      switch (size) {
        case "large":
          return {
            padding: "12px 16px"
          };
        case "middle":
          return {
            padding: "8px 12px"
          };
        case "small":
          return {
            padding: "8px 12px"
          };
        default:
          return {
            padding: "8px 12px"
          };
      }
    }};
  }
`;

const InnerTextarea = (props: IInputItemProps, ref: React.Ref<HTMLInputElement>) => {
  return <Wrapper ref={ref} as="textarea" size={props.size} {...props} />;
};

const Textarea = forwardRef(InnerTextarea) as React.ForwardRefExoticComponent<
  PropsWithoutRef<ITextareaProps> & RefAttributes<HTMLTextAreaElement>
>;

export default Textarea;
