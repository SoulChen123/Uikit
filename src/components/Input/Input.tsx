import React, { useState } from "react";
import styled from "@emotion/styled";
import { IInputProps } from "./type";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";

const Wrapper = styled("div")<Pick<IInputProps, "size"> & { asName: string }>`
  width: 100%;
  background-color: transparent;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  ${({ size }) => {
    switch (size) {
      case "large":
        return {
          height: 48,
          // borderRadius: 10,
          fontSize: 16,
          padding: "0 16px"
        };
      case "middle":
        return {
          height: 40,
          // borderRadius: 8,
          fontSize: 14,
          padding: "0 12px"
        };
      case "small":
        return {
          height: 32,
          // borderRadius: 6,
          fontSize: 12,
          padding: "0 12px"
        };
      default:
        return {
          height: 40,
          // borderRadius: 8,
          fontSize: 14,
          padding: "0 12px"
        };
    }
  }};
  ${({ theme }) => ({
    color: theme.system.gray[9],
    borderColor: theme.system.blueGray[6],
    caretColor: theme.system.gray[9],
    background: theme.system.transparent
  })}

  :not([data-disabled]):not(.${({ theme }) => theme.prefixCls}-${({ asName }) => asName}-wrapper-error) {
    :hover {
      ${({ theme }) => ({
        borderColor: theme.system.primary[5]
      })};
    }
    &[data-focused] {
      ${({ theme }) => ({
        borderColor: theme.system.primary[5],
        boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`
      })}
    }
  }

  :not([data-disabled]):hover {
    background: ${({ theme }) => theme.system.gray[1]};
  }

  &[data-disabled] {
    ${({ theme }) => ({
      background: theme.system.blueGray[2],
      color: theme.system.gray[4],
      borderColor: theme.system.blueGray[4]
    })};
    .${({ theme }) => theme.prefixCls}-${({ asName }) => asName}-before-node,
      .${({ theme }) => theme.prefixCls}-${({ asName }) => asName}-after-node {
      color: ${({ theme }) => theme.system.inherit};
    }
  }
`;

const InputWrapper = styled.input`
  background-color: transparent;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.system.inherit};
  height: 100%;
  font-size: ${({ theme }) => theme.system.inherit};
  outline: none;
  width: 100%;
  flex: 1;
  /* :hover,
  :focus {
    padding: 0;
    border: 0;
  } */
  &[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -webkit-appearance: textfield;
  }
  :-webkit-autofill {
    transition: color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.system.gray[9]};
  }
  ::placeholder {
    ${({ theme }) => ({
      color: theme.system.gray[5]
    })};
  }

  &[disabled] {
    cursor: not-allowed;
    ::placeholder {
      color: inherit;
    }
  }
`;

const BeforeNode = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${({ theme }) => theme.system.gray[5]};
  user-select: none;
`;

const AfterNode = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: ${({ theme }) => theme.system.inherit};
  user-select: none;
`;

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ beforeNode, afterNode, style, className, onFocus, onBlur, size, ...props }, ref) => {
    const { prefixCls } = useTheme();
    const [focus, setFocus] = useState(false);

    const asName = props.as || "input";

    return (
      <Wrapper
        style={style}
        {...(focus ? { "data-focused": "" } : undefined)}
        {...(props.disabled ? { "data-disabled": "" } : undefined)}
        className={cx(`${prefixCls}-${asName}-wrapper`, className)}
        size={size}
        asName={asName}
      >
        {beforeNode && <BeforeNode className={`${prefixCls}-${asName}-before-node`}>{beforeNode}</BeforeNode>}
        <InputWrapper
          {...props}
          className={`${prefixCls}-${asName}`}
          ref={ref}
          onFocus={(e) => {
            !props.disabled && setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur?.(e);
          }}
        />
        {afterNode && <AfterNode className={`${prefixCls}-${asName}-after-node`}>{afterNode}</AfterNode>}
      </Wrapper>
    );
  }
);

Input.defaultProps = {
  size: "middle"
};

export default Input;
