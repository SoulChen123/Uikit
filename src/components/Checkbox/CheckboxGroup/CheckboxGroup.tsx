import styled from "@emotion/styled";
import React, { forwardRef, memo } from "react";
import { CheckboxGroupProvider } from "../context";
import { ICheckboxGroupProps } from "../type";
import { __DEV__ } from "../../../config";
import { useControllableValue } from "ahooks";
import { cx } from "../../../utils/share";
import { useTheme } from "@emotion/react";

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  gap: 8px;
`;

const CheckboxGroup = forwardRef<HTMLDivElement, ICheckboxGroupProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, onChange, disabled, className, name, defaultValue, value, ...restProps } = props;

  const { prefixCls } = useTheme();

  const [list, setList] = useControllableValue<string[] | undefined>(props, {
    defaultValue: [],
    trigger: ""
  });

  const handleChange = (e: string[], ev?: React.ChangeEvent<HTMLInputElement>) => {
    !("value" in props) && setList(e);
    onChange?.(e, ev);
  };

  return (
    <CheckboxGroupProvider value={{ onChange: handleChange, value: list, disabled, name }}>
      <Wrapper className={cx(`${prefixCls}-checkbox-group`, className)} {...restProps} ref={ref}>
        {children}
      </Wrapper>
    </CheckboxGroupProvider>
  );
});

if (__DEV__) {
  CheckboxGroup.displayName = "CheckboxGroup";
}

export default memo(CheckboxGroup);
