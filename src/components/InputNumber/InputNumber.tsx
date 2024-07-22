import { formatToDecimals } from "@oxfun/sdk";
import styled from "@emotion/styled";
import BigNumber from "bignumber.js";
import React, { memo } from "react";
import { IInputNumberProps } from "./type";
import InputItem from "../InputItem/InputItem";
import { useControllableValue } from "ahooks";
import { useTheme } from "@emotion/react";

const Wrapper = styled(InputItem)<Pick<IInputNumberProps, "controls">>`
  ${({ controls, theme }) =>
    controls
      ? {
          [`.${theme.prefixCls}-input-wrapper`]: {
            paddingRight: 0
          }
        }
      : {}}
`;

const Controls = styled.div`
  height: 100%;
  width: 28px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.system.blueGray[4]};
`;

const Control = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.system.gray[7]};
  font-size: 12px;

  :hover {
    color: ${({ theme }) => theme.system.gray[9]};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.system.blueGray[4]};
`;

const regex = /^-?\d+(\.\d+)?$/;

const InputNumber = memo<IInputNumberProps>((props) => {
  const {
    step,
    min,
    max,
    value,
    defaultValue,
    isNegativeNumber,
    onChange,
    onBlur,
    isOnlyInteger,
    controls,
    afterNode,
    ...restProps
  } = props;

  const { prefixCls } = useTheme();

  const [controllableValue, setControllableValue] = useControllableValue(props, {
    defaultValuePropName: "defaultValue",
    valuePropName: "value",
    defaultValue: "",
    trigger: "onChange"
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    let value: string = event.target.value;
    if (value && +value && step) {
      const remainder = new BigNumber(value).modulo(step).toString();
      if (+remainder) {
        value = new BigNumber(value).minus(remainder).plus(step).toString();
      }
      setControllableValue(value);
    }

    //   if (value && min && new BigNumber(value).isLessThan(value)) {
    //     setControllableValue(min.toString());
    //   }

    onBlur?.(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (value) {
      if (
        !(
          regex.test(value) ||
          (value === "-" && isNegativeNumber) ||
          (!value.startsWith(".") &&
            value.endsWith(".") &&
            value !== "-." &&
            value.split(".").length - 1 === 1 &&
            !isOnlyInteger)
        )
      )
        return;

      if (!isNegativeNumber) {
        value = value.replace("-", "");
      }

      if (value !== "-" && value !== "-0" && !value.endsWith(".") && !(value.endsWith("0") && value.includes("."))) {
        value = new BigNumber(value).toString();
      }

      const [a, b] = value.split(".");
      if (step && b) {
        value = a + "." + b.substring(0, formatToDecimals(step));
      }

      setControllableValue(value);
    } else {
      setControllableValue("");
    }
  };

  const isAfterNode = !!afterNode || controls;

  return (
    <Wrapper
      type="text"
      inputMode="decimal"
      step={step}
      min={min}
      max={max}
      value={controllableValue}
      onChange={handleChange}
      onBlur={handleBlur}
      controls={controls}
      afterNode={
        isAfterNode ? (
          <>
            {afterNode}

            {controls && (
              <Controls className={`${prefixCls}-input-number-controls`}>
                <Control
                  onClick={() => {
                    const value = new BigNumber(controllableValue || 0).plus(step || 1);
                    if (!isNegativeNumber && value.isNegative()) return;
                    if (max && value.isGreaterThan(max)) return;
                    if (isOnlyInteger && !value.isInteger()) return;

                    setControllableValue(value.toString());
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.64645 4.14645C5.84171 3.95118 6.15829 3.95118 6.35355 4.14645L9.85355 7.64645C10.0488 7.84171 10.0488 8.15829 9.85355 8.35355C9.65829 8.54882 9.34171 8.54882 9.14645 8.35355L6 5.20711L2.85355 8.35355C2.65829 8.54882 2.34171 8.54882 2.14645 8.35355C1.95118 8.15829 1.95118 7.84171 2.14645 7.64645L5.64645 4.14645Z"
                    />
                  </svg>
                </Control>
                <Divider />
                <Control
                  onClick={() => {
                    const value = new BigNumber(controllableValue || 0).minus(step || 1);
                    if (!isNegativeNumber && value.isNegative()) return;
                    if (min && value.isLessThan(min)) return;
                    if (isOnlyInteger && !value.isInteger()) return;

                    setControllableValue(value.toString());
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.14645 4.14645C2.34171 3.95118 2.65829 3.95118 2.85355 4.14645L6 7.29289L9.14645 4.14645C9.34171 3.95118 9.65829 3.95118 9.85355 4.14645C10.0488 4.34171 10.0488 4.65829 9.85355 4.85355L6.35355 8.35355C6.25979 8.44732 6.13261 8.5 6 8.5C5.86739 8.5 5.74021 8.44732 5.64645 8.35355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645Z"
                    />
                  </svg>
                </Control>
              </Controls>
            )}
          </>
        ) : null
      }
      {...restProps}
    />
  );
});

export default InputNumber;
