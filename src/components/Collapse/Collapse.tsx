import React, { forwardRef } from "react";
import { ICollapseProps } from "./type";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { cx } from "../../utils";
import { useControllableValue } from "ahooks";
import { MinusIcon, PlusIcon } from "../../icons";

const Wrapper = styled.div(() => {
  return {
    display: "grid",
    gap: 0
  };
});

const Panel = styled.div(({ theme }) => {
  return {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.system.gray[2]
  };
});

const Header = styled.div(() => {
  return {
    padding: "24px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer"
  };
});

const HeaderText = styled.div(({ theme }) => {
  return {
    color: theme.system.gray[9],
    fontSize: 18,
    fontWeight: 500,
    flex: 1
  };
});

const ExpandIcon = styled.span<Pick<ICollapseProps, "expandIconPosition">>(({ expandIconPosition }) => {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    ...(expandIconPosition === "start"
      ? {
          paddingRight: 4
        }
      : {
          paddingLeft: 4
        })
  };
});

const Content = styled.div(({ theme }) => {
  return {
    background: theme.system.transparent,
    overflow: "hidden",
    maxHeight: 0,
    transition: "max-height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
    "&[data-actived]": {
      maxHeight: 300
    }
  };
});

const ContentBox = styled.div(({ theme }) => {
  return {
    padding: "0 0 24px 0",
    fontSize: 16,
    color: theme.system.gray[6]
  };
});

const Collapse = forwardRef<HTMLDivElement, ICollapseProps>((props, ref) => {
  const {
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultActiveKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    activeKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange,
    dataSource,
    expandIcon,
    expandIconPosition,
    accordion,
    ...restProps
  } = props;

  const [state, setState] = useControllableValue<string[]>(props, {
    defaultValuePropName: "defaultActiveKey",
    valuePropName: "activeKey",
    trigger: "onChange",
    defaultValue: []
  });

  const { prefixCls } = useTheme();
  return (
    <Wrapper className={cx(`${prefixCls}-collapse`, className)} {...restProps} ref={ref}>
      {dataSource?.map((p) => (
        <Panel
          className={`${prefixCls}-collapse-panel`}
          key={p.key}
          data-actived={state.includes(p.key.toString()) ? "" : undefined}
        >
          <Header
            className={`${prefixCls}-collapse-header`}
            onClick={() => {
              if (accordion) {
                setState([p.key]);
              } else {
                setState((e) => {
                  if (e.includes(p.key.toString())) {
                    return e.filter((r) => r !== p.key.toString());
                  } else {
                    return e.concat(p.key.toString());
                  }
                });
              }
            }}
          >
            {expandIconPosition === "start" && (
              <ExpandIcon className={`${prefixCls}-collapse-expand-icon`} expandIconPosition={expandIconPosition}>
                {expandIcon ? expandIcon : !state.includes(p.key.toString()) ? <PlusIcon /> : <MinusIcon />}
              </ExpandIcon>
            )}
            <HeaderText className={`${prefixCls}-collapse-text`}>{p.title}</HeaderText>
            {expandIconPosition === "end" && (
              <ExpandIcon className={`${prefixCls}-collapse-expand-icon`} expandIconPosition={expandIconPosition}>
                {expandIcon ? expandIcon : !state.includes(p.key.toString()) ? <PlusIcon /> : <MinusIcon />}
              </ExpandIcon>
            )}
          </Header>
          <Content
            className={`${prefixCls}-collapse-content`}
            data-actived={state.includes(p.key.toString()) ? "" : undefined}
          >
            <ContentBox className={`${prefixCls}-collapse-content-box`}>{p.content}</ContentBox>
          </Content>
        </Panel>
      ))}
    </Wrapper>
  );
});

Collapse.defaultProps = {
  expandIconPosition: "end"
};

export default Collapse;
