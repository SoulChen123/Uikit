import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ClassNames, useTheme } from "@emotion/react";
import { ISelectOptionProps, ISelectProps } from "./type";
import { Context } from "./context";

const Wrapper = styled("div")<Pick<ISelectProps, "size">>`
  display: flex;
  align-items: center;
  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  cursor: pointer;
  ${({ size }) => {
    switch (size) {
      case "large":
        return {
          height: 48,
          fontSize: 16,
          padding: "0 16px"
        };
      case "middle":
        return {
          height: 40,
          fontSize: 14,
          padding: "0 12px"
        };
      case "small":
        return {
          height: 32,
          fontSize: 12,
          padding: "0 12px"
        };
      default:
        return {
          height: 40,
          fontSize: 14,
          padding: "0 12px"
        };
    }
  }};

  ${({ theme }) => ({
    color: theme.system.gray[9]
  })}

  &[data-selected] {
    ${({ theme }) => ({
      color: theme.system.primary[6]
    })}
    cursor: default;
  }
  :not([data-disabled]):not([data-selected]):hover {
    ${({ theme }) => ({
      background: theme.system.blueGray[5]
    })}
  }

  &[data-disabled] {
    ${({ theme }) => ({
      color: theme.system.gray[5]
    })}
    cursor: not-allowed;
  }
`;

const Option: React.FC<ISelectOptionProps> = ({ style, className, children, value, disabled, ...props }) => {
  const { value: contextValue, setValue, setOpen, setInputValue, size } = useContext(Context);
  const { prefixCls } = useTheme();

  return (
    <ClassNames>
      {({ cx }) => {
        const clx = cx([{ [`${prefixCls}-select-option`]: true }, { [className || ""]: !!className }]);

        return (
          <Wrapper
            className={clx}
            data-disabled={disabled ? "" : undefined}
            data-selected={value === contextValue ? "" : undefined}
            size={size}
            style={style}
            {...props}
            onClick={() => {
              if (disabled) return;
              if (contextValue !== value) {
                setValue?.(value);
                setInputValue?.("");
              }
              setOpen?.(false);
            }}
          >
            <div>{children}</div>
          </Wrapper>
        );
      }}
    </ClassNames>
  );
};

export default Option;
