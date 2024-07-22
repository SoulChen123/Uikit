import styled from "@emotion/styled";
import React, { useRef } from "react";
import { IModalProps } from "./type";
import { CloseIcon } from "../../icons";
import { Transition } from "react-transition-group";
import Portal from "../Portal/Portal";
import { RemoveScroll } from "react-remove-scroll";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";
import { opacify } from "polished";

const Wrapper = styled.div<{ isOpen?: boolean }>`
  overflow: auto;
`;

const Mask = styled("div")`
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s;
  background: ${({ theme }) => opacify(-0.3, theme.system.black)};
  &[data-opened] {
    opacity: 1;
  }
`;

const Container = styled.div`
  z-index: ${({ theme }) => theme.zIndices.modal};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  pointer-events: none;
  align-items: center;

  /* @media screen and (max-width: 1024px) {
    padding: 0;
  } */
`;

const Content = styled("div")<{ width?: number; isFullScreen?: boolean }>`
  max-width: calc(100vw - 28px);
  width: ${({ width }) => width ?? 400}px;
  /* border-radius: 24px; */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 56px;
  max-height: calc(100vh - 128px);
  pointer-events: all;

  @media screen and (max-width: 1024px) {
    max-height: calc(100vh - 28px);
  }

  ${({ theme, isFullScreen }) => ({
    background: theme.system.blueGray[3],
    color: theme.system.gray[9],
    ...(isFullScreen
      ? {
          "@media screen and (max-width: 767px)": {
            width: "100vw",
            maxWidth: "-webkit-fill-available",
            height: "100vh",
            maxHeight: "-webkit-fill-available",
            borderRadius: 0
          }
        }
      : {})
  })}

  /* @media screen and (max-width: 767px) {
    width: 100vw;
    max-width: 100vw;
    max-width: -webkit-fill-available;
    height: 100vh;
    max-height: 100vh;
    max-height: -webkit-fill-available;
    border-radius: 0;
  } */

  opacity: 0;
  transition: opacity 0.15s;

  &[data-opened] {
    transition: opacity 0.3s;
    opacity: 1;
  }
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  height: 56px;
  padding: 0 24px;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${({ theme }) => theme.system.gray[6]};

  &:hover {
    color: ${({ theme }) => theme.system.gray[9]};
  }
`;

const Header = styled.title`
  min-height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.system.blueGray[6]};
`;

const Body = styled.section`
  flex: 1;
  overflow: auto;
  padding: 24px;
`;

const Modal: React.FC<IModalProps> = ({
  className,
  children,
  isOpen,
  isMaskCancel,
  isCancelBtn,
  width,
  onCancel,
  renderTitle,
  container,
  appendToParentPortal,
  destroyOnClose,
  zIndex,
  removeScrollEnabled,
  isFullScreen,
  ...props
}) => {
  const { prefixCls } = useTheme();
  const maskRef = useRef(null);

  const containerRef = useRef(null);

  return (
    <Portal container={container} appendToParentPortal={appendToParentPortal} appear={isOpen}>
      <RemoveScroll enabled={isOpen ? removeScrollEnabled : false} forwardProps>
        <Wrapper className={cx(`${prefixCls}-modal`, className)} {...props}>
          <Transition in={isOpen} timeout={{ exit: 300 }} appear unmountOnExit nodeRef={maskRef}>
            {(state) => {
              return (
                <Mask
                  ref={maskRef}
                  className={`${prefixCls}-modal-mask`}
                  data-opened={state === "entered" ? "" : undefined}
                  style={{ zIndex }}
                  onClick={() => {
                    isMaskCancel && onCancel?.(false);
                  }}
                />
              );
            }}
          </Transition>

          <Transition in={isOpen} timeout={{ exit: 150 }} unmountOnExit={destroyOnClose} nodeRef={containerRef} appear>
            {(state) => {
              return (
                <Container
                  className={`${prefixCls}-modal-container`}
                  style={{
                    zIndex,
                    ...(state === "exited" ? { display: "none" } : {})
                  }}
                  ref={containerRef}
                >
                  <Content
                    className={`${prefixCls}-modal-content`}
                    width={width}
                    isFullScreen={isFullScreen}
                    data-opened={state === "entered" ? "" : undefined}
                  >
                    {renderTitle && <Header className={`${prefixCls}-modal-header`}>{renderTitle}</Header>}
                    <Body className={`${prefixCls}-modal-body`}>{children}</Body>

                    {isCancelBtn && (
                      <CloseWrapper className={`${prefixCls}-modal-cancel`} onClick={onCancel?.bind(null, false)}>
                        <CloseIcon />
                      </CloseWrapper>
                    )}
                  </Content>
                </Container>
              );
            }}
          </Transition>
        </Wrapper>
      </RemoveScroll>
    </Portal>
  );
};

Modal.defaultProps = {
  isMaskCancel: true,
  isCancelBtn: true,
  removeScrollEnabled: true,
  isFullScreen: true
};

export default Modal;
