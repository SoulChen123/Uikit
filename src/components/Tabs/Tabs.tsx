import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { ClassNames, useTheme } from "@emotion/react";
import TabPane from "./TabPane";
import { ITabsProps } from "./type";
import { Context } from "./context";
import { useControllableValue, useInViewport, useRafState, useSize } from "ahooks";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ${({ theme }) => ({
    color: theme.system.gray[9],
    background: theme.system.transparent
  })}
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 1px;
  ${({ theme }) => ({
    background: theme.system.transparent
  })}
`;

const Nav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: auto;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NavList = styled.div<{ domRect?: Partial<DOMRect> }>`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
  align-items: center;
  ::after {
    content: "";
    height: 2px;
    width: ${({ domRect }) => domRect?.width}px;
    position: absolute;
    bottom: 0;
    left: ${({ domRect }) => domRect?.left}px;
    transition: width 0.3s, left 0.3s, right 0.3s;
    z-index: 1;
    ${({ theme }) => ({
      background: theme.system.primary[6]
    })}
  }
`;

const LeftNode = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
`;

const RightNode = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
`;

const Tabs: React.FC<ITabsProps> & {
  TabPane: typeof TabPane;
} = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, children, rightNode, leftNode, onChange, ...restProps } = props;
  const { prefixCls } = useTheme();

  const ref = useRef<HTMLDivElement>(null);

  const navListRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLDivElement>(null);

  const [rect, setRect] = useRafState<Partial<DOMRect>>();

  const [activeKey, setActiveKey] = useControllableValue<string>(props, {
    valuePropName: "activeKey",
    defaultValuePropName: "defaultActiveKey"
  });

  const setDomRect = () => {
    const parentDomRect = navListRef.current?.getBoundingClientRect();
    const domRect = navListRef.current?.children.namedItem(`${prefixCls}-tabs-tab-actived`)?.getBoundingClientRect();
    if (parentDomRect && domRect) {
      setRect({
        left: domRect.x - parentDomRect.x,
        width: domRect.width
      });
    } else {
      setRect(undefined);
    }
  };

  const [inViewport] = useInViewport(ref);

  const size = useSize(navListRef);

  useEffect(() => {
    setDomRect();
  }, [activeKey, prefixCls, inViewport, size?.width]);

  return (
    <ClassNames>
      {({ cx }) => {
        const clx = cx([{ [`${prefixCls}-tabs`]: true }, { [className || ""]: !!className }]);

        return (
          <Context.Provider value={{ activeKey, setActiveKey }}>
            <Wrapper className={clx} {...restProps} ref={ref}>
              {!!leftNode && <LeftNode className={`${prefixCls}-tabs-left-node`}>{leftNode}</LeftNode>}

              <Nav className={`${prefixCls}-tabs-nav`} ref={navRef}>
                <NavList className={`${prefixCls}-tabs-nav-list`} ref={navListRef} domRect={rect}>
                  {children}
                </NavList>
              </Nav>

              {!!rightNode && <RightNode className={`${prefixCls}-tabs-right-node`}>{rightNode}</RightNode>}

              <Line className={`${prefixCls}-tabs-line`} />
            </Wrapper>
          </Context.Provider>
        );
      }}
    </ClassNames>
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
