import styled from "@emotion/styled";
import React, { forwardRef, useRef } from "react";
import { IDrawerProps } from "./type";
import Portal from "../Portal/Portal";
import { Transition } from "react-transition-group";
import { isBrowser } from "../../utils/dom";
import { RemoveScroll } from "react-remove-scroll";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";
import { opacify } from "polished";

const Wrapper = styled.div`
  overflow: hidden;
`;

const Mask = styled("div")`
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndices.drawer};
  position: fixed;
  pointer-events: auto;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s;
  background: ${({ theme }) => opacify(-0.3, theme.system.black)};

  &[data-opened] {
    opacity: 1;
  }
`;

const Container = styled("div")(({ theme }) => {
  return {
    position: "fixed",
    zIndex: theme.zIndices.drawer,
    background: theme.system.blueGray[2],
    transition: "transform 0.15s",

    "&[data-opened]": {
      transition: "transform 0.3s"
    },

    "&[data-placement=left]": {
      left: 0,
      top: 0,
      height: "100%",
      width: 300,
      transform: "translateX(-100%)",
      "&[data-opened]": {
        transform: "translate(0)"
      }
    },
    "&[data-placement=right]": {
      right: 0,
      top: 0,
      height: "100%",
      width: 300,
      transform: "translateX(100%)",
      "&[data-opened]": {
        transform: "translate(0)"
      }
    },
    "&[data-placement=top]": {
      top: 0,
      left: 0,
      width: "100%",
      height: 300,
      transform: "translateY(-100%)",
      "&[data-opened]": {
        transform: "translate(0)"
      }
    },
    "&[data-placement=bottom]": {
      bottom: 0,
      left: 0,
      width: "100%",
      height: 300,
      transform: "translateY(100%)",
      "&[data-opened]": {
        transform: "translate(0)"
      }
    }
  };
});

const Drawer = forwardRef<HTMLDivElement, IDrawerProps>(
  (
    {
      placement,
      isOpen,
      onCancel,
      children,
      className,
      container,
      appendToParentPortal,
      destroyOnClose,
      zIndex,
      ...props
    },
    ref
  ) => {
    const { prefixCls } = useTheme();
    const maskRef = useRef(null);
    const containerRef = useRef(null);

    if (!isBrowser) return null;

    return (
      <Portal container={container} appendToParentPortal={appendToParentPortal} appear={isOpen}>
        <RemoveScroll enabled={isOpen} forwardProps>
          <Wrapper
            className={cx(`${prefixCls}-drawer`, className)}
            onClick={onCancel?.bind(null, false)}
            {...props}
            ref={ref}
          >
            <Transition in={isOpen} timeout={{ exit: 300 }} appear unmountOnExit nodeRef={maskRef}>
              {(state) => {
                return (
                  <Mask
                    className={`${prefixCls}-drawer-mask`}
                    ref={maskRef}
                    data-opened={state === "entered" ? "" : undefined}
                    style={{
                      zIndex
                    }}
                  />
                );
              }}
            </Transition>

            <Transition
              in={isOpen}
              timeout={{ exit: 150 }}
              appear
              unmountOnExit={destroyOnClose}
              nodeRef={containerRef}
            >
              {(state) => {
                return (
                  <Container
                    className={`${prefixCls}-drawer-container`}
                    data-placement={placement}
                    data-opened={state === "entered" ? "" : undefined}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      zIndex,
                      ...(state === "exited" && { display: "none" })
                    }}
                    ref={containerRef}
                  >
                    {children}
                  </Container>
                );
              }}
            </Transition>
          </Wrapper>
        </RemoveScroll>
      </Portal>
    );
  }
);

Drawer.defaultProps = {
  placement: "right"
};

export default Drawer;
