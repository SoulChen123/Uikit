import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import Input from "../Input/Input";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";
import { IInputItemProps } from "./type";

const Wrapper = styled.div<{ asName: string }>(({ theme, asName }) => ({
  position: "relative",
  [`.${theme.prefixCls}-${asName}-wrapper-error:not([data-disabled])`]: {
    borderColor: theme.system.red[5],

    "&[data-focused]": {
      boxShadow: `0px 0px 0px 4px ${theme.system.red[2]}`
    }
  }
}));

const Message = styled("div")`
  font-weight: 400;
  font-size: 12px;
  padding-top: 4px;

  &[data-prompt] {
    ${({ theme }) => ({
      color: theme.system.gray[9]
    })}
  }

  &[data-error] {
    ${({ theme }) => ({
      color: theme.system.red[5]
    })}
  }
`;

const InputItem = forwardRef<HTMLInputElement, IInputItemProps>(
  ({ style, className, error, prompt, ...props }, ref) => {
    const { prefixCls } = useTheme();

    const asName = props.as || "input";

    return (
      <Wrapper
        style={style}
        className={cx(`${prefixCls}-${asName}-item`, !!error && `${prefixCls}-${asName}-item-error`, className)}
        asName={asName}
      >
        <Input className={cx(error && `${prefixCls}-${asName}-wrapper-error`)} {...props} ref={ref} />

        {!error && !!prompt && (
          <Message className={`${prefixCls}-${asName}-item-explain-prompt`} data-prompt="">
            {prompt}
          </Message>
        )}
        {!!error && (
          <Message className={`${prefixCls}-${asName}-item-explain-error`} data-error="">
            {error}
          </Message>
        )}
      </Wrapper>
    );
  }
);

export default InputItem;
