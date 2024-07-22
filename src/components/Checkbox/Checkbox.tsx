import styled from "@emotion/styled";
import React, { forwardRef, useEffect, useState } from "react";
import { ICheckboxProps } from "./type";
import { keyframes, useTheme } from "@emotion/react";
import { useCheckboxGroup } from "./context";
import { __DEV__ } from "../../config";
import { useControllableValue } from "ahooks";
import { cx } from "../../utils/share";

const checkAnim = keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
});

const indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
const indeterminateScaleAnim = keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});

const Wrapper = styled("label")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  cursor: "pointer",
  position: "relative",
  verticalAlign: "top",

  ":not([data-disabled]):hover": {
    [`.${theme.prefixCls}-checkbox-control`]: {
      borderColor: theme.system.primary[4],
      boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`,

      "::after": {
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
  /* border-radius: 4px; */
  border: 1.5px solid ${({ theme }) => theme.system.gray[5]};
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.system.black};

  &[data-checked],
  &[data-indeterminate] {
    border: 0;

    ::after {
      content: "";
      width: 100%;
      height: 100%;
      /* border-radius: 4px; */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.system.primary[5]};
    }
  }

  &[data-focused] {
    box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.system.primary[2]};
    &[data-checked],
    &[data-indeterminate] {
      ::after {
        background: ${({ theme }) => theme.system.primary[4]};
      }
    }
  }

  &[data-disabled] {
    border-color: ${({ theme }) => theme.system.gray[4]};
    color: ${({ theme }) => theme.system.gray[4]};

    &[data-checked],
    &[data-indeterminate] {
      ::after {
        background: ${({ theme }) => theme.system.primary[2]};
      }
    }
  }

  svg {
    z-index: 1;
  }
  &[data-checked] svg {
    animation: ${checkAnim} 200ms linear;
  }
  &[data-indeterminate] svg {
    animation: ${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear;
  }
`;

const Content = styled.span`
  flex: 1;
  font-size: 14px;
  margin-left: 8px;
  user-select: none;
`;

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const {
    disabled,
    children,
    className,
    onChange,
    name,
    onFocus,
    onBlur,
    indeterminate,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    checked,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultChecked,
    ...resProps
  } = props;
  const group = useCheckboxGroup();
  const { prefixCls } = useTheme();

  const mergeDisabled = group?.disabled ?? disabled;

  const [isChecked, setChecked] = useControllableValue<boolean | undefined>(props, {
    valuePropName: "checked",
    defaultValuePropName: "defaultChecked",
    defaultValue: false,
    trigger: ""
  });

  const [focused, setFocused] = useState<boolean>();

  useEffect(() => {
    if (group?.value) {
      if (props.value) {
        setChecked(group.value.includes(props.value));
      }
    }
  }, [group?.value, props.value]);

  return (
    <Wrapper
      className={cx(`${prefixCls}-checkbox`, className)}
      {...(mergeDisabled ? { "data-disabled": "" } : {})}
      {...(isChecked ? { "data-checked": "" } : {})}
      {...(focused ? { "data-focused": "" } : {})}
    >
      <Input
        className={`${prefixCls}-checkbox-input`}
        checked={isChecked}
        name={group?.name ?? name}
        value={"other"}
        onChange={(e) => {
          onChange?.(e);
          const isCheck = e.target.checked;
          if (group) {
            if (isCheck) {
              group?.onChange?.([...(group.value || []), e.target.value], e);
            } else {
              group?.onChange?.(group.value?.filter((p) => p !== e.target.value) || [], e);
            }
          } else {
            setChecked(isCheck);
          }
        }}
        disabled={mergeDisabled}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        ref={ref}
        type="checkbox"
        {...resProps}
      />
      <Control
        className={`${prefixCls}-checkbox-control`}
        {...(mergeDisabled ? { "data-disabled": "" } : {})}
        {...(isChecked ? { "data-checked": "" } : {})}
        {...(indeterminate ? { "data-indeterminate": "" } : {})}
        {...(focused ? { "data-focused": "" } : {})}
      >
        {indeterminate && !isChecked && (
          <svg width="10" height="2" viewBox="0 0 10 2" stroke="currentColor" fill="none">
            <path d="M1 1H9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {isChecked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor">
            <path d="M1 4L4 7L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </Control>
      {!!children && <Content className={`${prefixCls}-checkbox-content`}>{children}</Content>}
    </Wrapper>
  );
});

if (__DEV__) {
  Checkbox.displayName = "Checkbox";
}

export default Checkbox;
