import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import { IDropdownProps } from "./type";
import Portal from "../Portal/Portal";
import { Transition } from "react-transition-group";
import { useClickAway, useControllableValue } from "ahooks";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";
import { CaretDownIcon } from "../../svgs";
import { usePopper } from "react-popper";
import { SLIDE_DOWN_IN, SLIDE_DOWN_OUT, SLIDE_UP_IN, SLIDE_UP_OUT } from "../../theme/animations";
import { convertDropdownPlacement, convertPopperPlacement } from "./convert";

const Wrapper = styled.div`
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.system.gray[9]};
  &[data-opened] {
    color: ${({ theme }) => theme.system.primary[6]};
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: 4px;
  color: ${({ theme }) => theme.system.gray[9]};
  transition: transform 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  &[data-opened] {
    color: ${({ theme }) => theme.system.primary[6]};
    transform: rotateX(180deg);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  animation-fill-mode: both;
  animation-duration: 0.3s;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  display: none;
  padding: 4px 0;

  &[data-placement="bottom"],
  &[data-placement="bottom-left"],
  &[data-placement="bottom-right"] {
    &[data-enter] {
      animation-name: ${SLIDE_UP_IN};
    }
    &[data-exit] {
      animation-name: ${SLIDE_UP_OUT};
      pointer-events: none;
    }
  }
  &[data-placement="top"],
  &[data-placement="top-left"],
  &[data-placement="top-right"] {
    &[data-enter] {
      animation-name: ${SLIDE_DOWN_IN};
    }
    &[data-exit] {
      animation-name: ${SLIDE_DOWN_OUT};
      pointer-events: none;
    }
  }

  &[data-opened] {
    display: block;
  }
`;

const OverlayContainer = styled("div")`
  cursor: default;
  overflow: hidden;
  /* border-radius: 8px; */
  max-width: 100vw;
  border-width: 1px;
  border-style: solid;
  box-shadow: ${({ theme }) =>
    theme.isDark ? "0px 16px 48px 0px rgba(255, 255, 255, 0.20)" : "0px 16px 48px 0px rgba(0, 0, 0, 0.20);"};
  background: ${({ theme }) => theme.system.blueGray[3]};
  color: ${({ theme }) => theme.system.gray[9]};
  border-color: ${({ theme }) => theme.system.gray[2]};
`;

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const { prefixCls } = useTheme();

  const {
    className,
    children,
    overlay,
    overlayStyle,
    overlayClassName,
    container,
    appendToParentPortal,
    trigger,
    onOpenChange,
    destroyOnClose,
    zIndex,
    placement,
    onMouseEnter,
    onMouseLeave,
    onClick,
    arrowIcon,
    ...restProps
  } = props;

  const [isOpen, setOpen] = useControllableValue(props, {
    defaultValuePropName: "defaultOpen",
    valuePropName: "isOpen",
    trigger: "onOpenChange"
  });

  const [ref, setRef] = React.useState<HTMLDivElement | null>(null);

  const [overlayRef, setOverlayRef] = React.useState<HTMLDivElement | null>(null);

  const handleOpen = useCallback(() => {
    if (trigger === "hover") {
      setOpen(true);
    }
    if (trigger === "click") {
      setOpen(!isOpen);
    }
  }, [isOpen, trigger]);

  const { styles, attributes, update } = usePopper(ref, overlayRef, {
    strategy: "absolute",
    placement: convertDropdownPlacement[placement || "bottom-left"],
    modifiers: [
      { name: "arrow", enabled: false },
      {
        name: "computeStyles",
        options: {
          gpuAcceleration: false
        }
      }
      // {
      //   name: "offset",
      //   options: {
      //     offset: [10, 20]
      //   }
      // }
    ]
  });

  useEffect(() => {
    update?.();
  }, [isOpen]);

  useClickAway(() => {
    if (trigger === "click") {
      isOpen && handleClose();
    }
  }, ref);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper
      {...restProps}
      className={cx(`${prefixCls}-dropdown-trigger`, isOpen && `${prefixCls}-dropdown-opened`, className)}
      data-opened={isOpen ? "" : undefined}
      onMouseEnter={(e) => {
        trigger === "hover" && handleOpen();
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        trigger === "hover" && handleClose();
        onMouseLeave?.(e);
      }}
      onClick={(e) => {
        e.stopPropagation();
        trigger === "click" && handleOpen();
        onClick?.(e);
      }}
      ref={setRef}
    >
      {children}

      {!!arrowIcon && (
        <Icon className={`${prefixCls}-dropdown-icon`} data-opened={isOpen ? "" : undefined}>
          {arrowIcon}
        </Icon>
      )}
      <Portal container={container} appendToParentPortal={appendToParentPortal} appear={isOpen}>
        <Transition
          in={isOpen}
          timeout={{
            exit: 300,
            enter: 300,
            appear: 300
          }}
          appear
          unmountOnExit={destroyOnClose}
          nodeRef={{ current: overlayRef }}
        >
          {(state) => {
            return overlay ? (
              <Overlay
                className={cx(`${prefixCls}-dropdown`, overlayClassName)}
                ref={setOverlayRef}
                style={{
                  zIndex,
                  ...overlayStyle,
                  ...styles.popper
                }}
                data-opened={state !== "exited" ? "" : undefined}
                data-enter={state === "entering" ? "" : undefined}
                data-exit={state === "exiting" ? "" : undefined}
                data-placement={convertPopperPlacement[attributes.popper?.["data-popper-placement"] || ""]}
                onClick={(e) => e.stopPropagation()}
              >
                <OverlayContainer className={cx(`${prefixCls}-dropdown-container`)}>{overlay}</OverlayContainer>
              </Overlay>
            ) : null;
          }}
        </Transition>
      </Portal>
    </Wrapper>
  );
};

Dropdown.defaultProps = {
  trigger: "hover",
  placement: "bottom-left",
  arrowIcon: <CaretDownIcon />
};

export default Dropdown;
