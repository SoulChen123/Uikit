import styled from "@emotion/styled";
import React, { forwardRef, useState } from "react";
import { IRadioProps } from "./type";
import { useRadioGroup } from "./context";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";

const Wrapper = styled("label")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  cursor: "pointer",
  position: "relative",
  verticalAlign: "top",

  ":not([data-disabled]):hover": {
    [`.${theme.prefixCls}-radio-control`]: {
      borderColor: theme.system.primary[4],
      "::before": {
        background: theme.system.primary[4]
      }
    }
  },
  "&[data-disabled]": {
    color: theme.system.gray[4],
    cursor: "not-allowed"
  }
}));

const Input = styled.input`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;

const Control = styled("span")`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.system.gray[5]};
  background: transparent;
  position: relative;

  &[data-checked] {
    border-color: ${({ theme }) => theme.system.primary[5]};

    ::before {
      content: "";
      width: calc(100% + 1px);
      height: calc(100% + 1px);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.system.primary[5]};
    }

    ::after {
      content: "";
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.system.blueGray[1]};
    }
  }

  &[data-focused] {
    box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.system.primary[2]};
  }

  &[data-disabled] {
    border-color: ${({ theme }) => theme.system.gray[4]};

    &[data-checked] {
      border-color: ${({ theme }) => theme.system.primary[2]};
      ::before {
        background: ${({ theme }) => theme.system.primary[2]};
      }
    }
  }
`;

const Content = styled.span`
  font-size: 14px;
  margin-left: 8px;
  user-select: none;
`;

const Radio = forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
  const { disabled, children, className, onChange, checked, defaultChecked, name, onFocus, onBlur, ...restProps } =
    props;
  const { prefixCls } = useTheme();
  const group = useRadioGroup();

  let mergeChecked = checked ?? defaultChecked;

  const mergeDisabled = group?.disabled ?? disabled;

  const [isChecked, setChecked] = useState<boolean>();

  const [focus, setFocus] = useState<boolean>();

  if (group) {
    mergeChecked = group.value === props.value;
  }

  return (
    <Wrapper
      className={cx(`${prefixCls}-radio`, className)}
      {...(mergeDisabled ? { "data-disabled": "" } : {})}
      {...(mergeChecked ?? isChecked ? { "data-checked": "" } : {})}
      {...(focus ? { "data-focused": "" } : {})}
    >
      <Input
        className={`${prefixCls}-radio-input`}
        checked={mergeChecked}
        name={group?.name ?? name}
        value="other"
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange?.(e);
          group?.onChange?.(e);
        }}
        ref={ref}
        disabled={mergeDisabled}
        onFocus={(e) => {
          setFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur?.(e);
        }}
        {...restProps}
        type="radio"
      />
      <Control
        className={`${prefixCls}-radio-control`}
        {...(mergeDisabled ? { "data-disabled": "" } : {})}
        {...(mergeChecked ?? isChecked ? { "data-checked": "" } : {})}
        {...(focus ? { "data-focused": "" } : {})}
      />
      {!!children && <Content className={`${prefixCls}-radio-content`}>{children}</Content>}
    </Wrapper>
  );
});

export default Radio;
