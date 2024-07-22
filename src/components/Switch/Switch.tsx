import styled from "@emotion/styled";
import React, { forwardRef, useState } from "react";
import { ISwitchProps } from "./type";
import { __DEV__ } from "../../config";
import { useControllableValue } from "ahooks";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";

const Wrapper = styled("label")(({ theme }) => ({
  display: "inline-block",
  width: "fit-content",
  cursor: "pointer",
  position: "relative",
  verticalAlign: "middle",
  userSelect: "none",
  transition: "all 0.2s",

  ":not([data-disabled]):hover": {
    [`.${theme.prefixCls}-switch-track`]: {
      background: theme.system.blueGray[5],
      boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
    }
  },
  "&[data-checked]:not([data-disabled]):hover": {
    [`.${theme.prefixCls}-switch-track`]: {
      background: theme.system.primary[4],
      boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`
    }
  },
  "&[data-disabled]": {
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

const Track = styled("span")`
  width: 36px;
  height: 20px;
  border-radius: 9999px;
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.system.gray[6]};

  &[data-checked] {
    background: ${({ theme }) => theme.system.primary[5]};

    .${({ theme }) => theme.prefixCls}-switch-control {
      inset-inline-start: calc(100% - 18px);
    }
  }

  &[data-focused] {
    box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.system.primary[2]};
  }

  &[data-disabled] {
    background: ${({ theme }) => theme.system.blueGray[3]};
    .${({ theme }) => theme.prefixCls}-switch-control::before {
      background: ${({ theme }) => theme.system.black};
    }

    .${({ theme }) => theme.prefixCls}-switch-control::after {
      background: ${({ theme }) => theme.system.blueGray[3]};
    }

    &[data-checked] {
      background: ${({ theme }) => theme.system.primary[2]};

      .${({ theme }) => theme.prefixCls}-switch-control::before {
        background: ${({ theme }) => theme.system.primary[1]};
      }
      .${({ theme }) => theme.prefixCls}-switch-control::after {
        background: ${({ theme }) => theme.system.primary[2]};
      }
    }
  }
`;

const Control = styled.span(({ theme }) => ({
  width: 16,
  height: 16,
  insetInlineStart: 2,
  borderRadius: "50%",
  transition: "all 0.2s",
  position: "relative",

  "::before": {
    position: "absolute",
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0,
    background: theme.system.white,
    borderRadius: "50%",
    transition: "all .2s ease-in-out",
    content: "''"
  },

  "::after": {
    position: "absolute",
    width: 8,
    height: 8,
    top: 4,
    left: 4,
    background: theme.system.blueGray[6],
    borderRadius: "50%",
    transition: "all .2s ease-in-out",
    content: "''"
  },

  "&[data-checked]": {
    "::before": {
      background: theme.system.black
    },
    "::after": {
      background: theme.system.primary[6]
    }
  }
}));

const Switch = forwardRef<HTMLInputElement, ISwitchProps>((props, ref) => {
  const { disabled, className, onChange, onFocus, onBlur, checked, defaultChecked, ...resProps } = props;
  const { prefixCls } = useTheme();
  const [isChecked, setChecked] = useControllableValue<boolean | undefined>(props, {
    valuePropName: "checked",
    defaultValuePropName: "defaultChecked",
    defaultValue: false,
    trigger: ""
  });

  const [focus, setFocus] = useState<boolean>();

  return (
    <Wrapper
      className={cx(`${prefixCls}-switch`, className)}
      {...(disabled ? { "data-disabled": "" } : {})}
      {...(isChecked ? { "data-checked": "" } : {})}
      {...(focus ? { "data-focused": "" } : {})}
    >
      <Input
        className={`${prefixCls}-switch-input`}
        checked={isChecked}
        value={"other"}
        onChange={(e) => {
          onChange?.(e);
          setChecked(e.target.checked);
        }}
        disabled={disabled}
        onFocus={(e) => {
          setFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur?.(e);
        }}
        ref={ref}
        type="checkbox"
        {...resProps}
      />
      <Track
        className={`${prefixCls}-switch-track`}
        {...(disabled ? { "data-disabled": "" } : {})}
        {...(isChecked ? { "data-checked": "" } : {})}
        {...(focus ? { "data-focused": "" } : {})}
      >
        <Control className={`${prefixCls}-switch-control`} {...(isChecked ? { "data-checked": "" } : {})}></Control>
      </Track>
    </Wrapper>
  );
});

if (__DEV__) {
  Switch.displayName = "Switch";
}

export default Switch;
