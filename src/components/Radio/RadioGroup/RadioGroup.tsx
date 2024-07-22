import styled from "@emotion/styled";
import React, { forwardRef, memo } from "react";
import { RadioGroupProvider } from "../context";
import { IRadioGroupProps } from "../type";
import { useControllableValue } from "ahooks";
import { cx } from "../../../utils/share";
import { useTheme } from "@emotion/react";

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  gap: 8px;
`;

const RadioGroup = forwardRef<HTMLDivElement, IRadioGroupProps>((props, ref) => {
  const { children, disabled, className, name, onChange, ...restProps } = props;
  const { prefixCls } = useTheme();
  const [value, setValue] = useControllableValue<string | undefined>(props, {
    trigger: ""
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  return (
    <RadioGroupProvider value={{ onChange: handleChange, value, disabled, name }}>
      <Wrapper className={cx(`${prefixCls}-radio-group`, className)} {...restProps} ref={ref}>
        {children}
      </Wrapper>
    </RadioGroupProvider>
  );
});

export default memo(RadioGroup);
