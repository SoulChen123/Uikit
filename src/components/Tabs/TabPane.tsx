import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ClassNames, useTheme } from "@emotion/react";
import { ITabPaneProps } from "./type";
import { Context } from "./context";

const Wrapper = styled("div")(({ theme }) => ({
  padding: "14px 0",
  cursor: "pointer",
  fontSize: 14,
  whiteSpace: "nowrap",
  fontWeight: 600,
  color: theme.system.gray[9],
  ":hover": {
    color: theme.system.gray[9]
  },
  "&[data-actived]": {
    color: theme.system.gray[9]
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: "0.5"
  }
}));

const TabPane: React.FC<ITabPaneProps> = ({ className, tab, disabled, value, onClick, children, ...props }) => {
  const { activeKey, setActiveKey } = useContext(Context);
  const { prefixCls } = useTheme();

  return (
    <ClassNames>
      {({ cx }) => {
        const clx = cx([{ [`${prefixCls}-tabs-tab`]: true }, { [className || ""]: !!className }]);

        return (
          <Wrapper
            className={clx}
            {...(activeKey?.toString() === value?.toString()
              ? { id: `${prefixCls}-tabs-tab-actived`, "data-actived": "" }
              : {})}
            {...(disabled ? { "data-disabled": "" } : {})}
            onClick={(e) => {
              onClick?.(e);
              if (disabled) return;
              if (activeKey?.toString() === value?.toString()) return;
              setActiveKey?.(value);
            }}
            {...props}
          >
            {tab ?? children}
          </Wrapper>
        );
      }}
    </ClassNames>
  );
};

export default TabPane;
