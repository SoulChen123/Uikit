import React, { useCallback, useState, useRef, isValidElement, useEffect } from "react";
import styled from "@emotion/styled";
import { ClassNames, useTheme } from "@emotion/react";
import { ClearIcon, SearchIcon, SelectDownIcon } from "../../svgs";
import Portal from "../Portal/Portal";
import { Transition } from "react-transition-group";
import { ISelectProps } from "./type";
import Option from "./Option";
import { Context } from "./context";
import { useClickAway, useControllableValue } from "ahooks";
import { opacify } from "polished";
import { SLIDE_DOWN_IN, SLIDE_DOWN_OUT, SLIDE_UP_IN, SLIDE_UP_OUT } from "../../theme/animations";
import { usePopper } from "react-popper";
import { convertDropdownPlacement, convertPopperPlacement } from "../Dropdown/convert";
import Empty from "../Empty/Empty";
import useLocalization from "../../hooks/useLocalization";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  .${({ theme }) => theme.prefixCls}-select-error:not(.${({ theme }) => theme.prefixCls}-select-disabled) {
    ${({ theme }) => ({
      borderColor: theme.system.red[5]
    })};

    &.${({ theme }) => theme.prefixCls}-select-opened {
      ${({ theme }) => ({
        boxShadow: `0px 0px 0px 4px ${theme.system.red[2]}`
      })}
    }
  }
`;

const Container = styled.div<Pick<ISelectProps, "size">>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: 1px solid;
  ${({ size }) => {
    switch (size) {
      case "large":
        return {
          height: 48,
          // borderRadius: 10,
          fontSize: 16,
          padding: "0 16px"
        };
      case "middle":
        return {
          height: 40,
          // borderRadius: 8,
          fontSize: 14,
          padding: "0 12px"
        };
      case "small":
        return {
          height: 32,
          // borderRadius: 6,
          fontSize: 12,
          padding: "0 12px"
        };
      default:
        return {
          height: 40,
          // borderRadius: 8,
          fontSize: 14,
          padding: "0 12px"
        };
    }
  }};

  ${({ theme }) => ({
    color: theme.system.gray[9],
    borderColor: theme.system.blueGray[6]
  })};

  .${({ theme }) => theme.prefixCls}-select-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 8px;
    pointer-events: none;
    user-select: none;
    ${({ theme }) => ({
      color: theme.system.gray[5]
    })}

    svg[data-rotate] {
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  &.${({ theme }) => theme.prefixCls}-select-opened {
    ${({ theme }) => ({
      borderColor: theme.system.primary[5],
      boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`
    })};

    svg[data-rotate] {
      transform: rotateX(-180deg);
    }
  }

  :not(.${({ theme }) => theme.prefixCls}-select-disabled):not(.${({ theme }) => theme.prefixCls}-select-error):hover {
    ${({ theme }) => ({
      color: theme.system.gray[9],
      borderColor: theme.system.primary[5]
    })}
  }

  :not(.${({ theme }) => theme.prefixCls}-select-disabled):hover {
    ${({ theme }) => ({
      background: theme.system.gray[1]
    })}
    .${({ theme }) => theme.prefixCls}-select-clear-icon {
      display: flex;
    }
    .${({ theme }) => theme.prefixCls}-select-icon {
      display: none;
    }
  }

  :not(.${({ theme }) => theme.prefixCls}-select-clear):hover {
    .${({ theme }) => theme.prefixCls}-select-icon {
      display: flex;
    }
  }

  .${({ theme }) => theme.prefixCls}-select-clear-icon {
    ${({ theme }) => ({
      color: theme.system.gray[5]
    })};
    align-items: center;
    justify-content: space-between;
    padding-left: 8px;
    user-select: none;
    display: none;
    cursor: pointer;
    svg {
      width: 20px;
    }
    :hover {
      ${({ theme }) => ({
        color: theme.system.gray[9]
      })};
    }
  }

  .${({ theme }) => theme.prefixCls}-select-selection-search-input {
    cursor: pointer;
    opacity: 0;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  input[type="search"] {
    -webkit-appearance: none;
  }
  input::-webkit-search-cancel-button {
    display: none;
  }

  &.${({ theme }) => theme.prefixCls}-select-search {
    cursor: text;

    .${({ theme }) => theme.prefixCls}-select-selection-search-input {
      cursor: text;
      opacity: 1;
    }
  }

  &.${({ theme }) => theme.prefixCls}-select-disabled {
    cursor: not-allowed;
    ${({ theme }) => ({
      background: theme.system.blueGray[2],
      color: theme.system.gray[4],
      borderColor: theme.system.blueGray[4]
    })};

    .${({ theme }) => theme.prefixCls}-select-selection-placeholder, .${({ theme }) => theme.prefixCls}-select-icon {
      color: inherit;
    }
  }
`;

const Selected = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

const SelectedContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  .${({ theme }) => theme.prefixCls}-select-selection-search {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .${({ theme }) => theme.prefixCls}-select-selection-search-input {
      height: 100%;
      width: 100%;
      background: ${({ theme }) => theme.system.transparent};
      border: none;
      outline: none;
      caret-color: ${({ theme }) => theme.system.gray[9]};
      color: ${({ theme }) => theme.system.gray[9]};
      padding: 0;
      &[type="search"]::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }
  }

  .${({ theme }) => theme.prefixCls}-select-selection-item {
    flex: 1;
    width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  .${({ theme }) => theme.prefixCls}-select-selection-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    color: ${({ theme }) => theme.system.gray[5]};
  }
`;

const SelectDropdown = styled("div")`
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

const SelectDropdownContainer = styled.div<Pick<ISelectProps, "size">>`
  cursor: default;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  padding: 4px 0;
  max-width: 100vw;
  box-shadow: ${({ theme }) =>
    theme.isDark ? "0px 16px 48px 0px rgba(255, 255, 255, 0.20)" : "0px 16px 48px 0px rgba(0, 0, 0, 0.20);"};
  background: ${({ theme }) => theme.system.blueGray[3]};
  color: ${({ theme }) => theme.system.gray[9]};
  border-color: ${({ theme }) => theme.system.gray[2]};

  ${({ size }) => {
    switch (size) {
      case "large":
        return {
          // borderRadius: 10
        };
      case "middle":
        return {
          // borderRadius: 8
        };
      case "small":
        return {
          // borderRadius: 6
        };
      default:
        return {
          // borderRadius: 8
        };
    }
  }};
`;

const SelectDropdownGroup = styled.div`
  max-height: 240px;
  overflow-y: overlay;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    /* border-radius: 4px; */
    box-shadow: none;
    background-color: inherit;
  }
  ::-webkit-scrollbar-thumb {
    /* border-radius: 4px; */
    ${({ theme }) => ({
      background: theme.system.gray[6]
    })}
  }
`;

const Message = styled("div")`
  font-weight: 400;
  font-size: 12px;
  padding-top: 4px;

  &[data-prompt] {
    ${({ theme }) => ({
      color: theme.system.gray[9]
    })}
  }

  &[data-error] {
    ${({ theme }) => ({
      color: theme.system.red[5]
    })}
  }
`;

const Select: React.FC<ISelectProps> & {
  Option: typeof Option;
} = ({ arrowIcon = <SelectDownIcon data-rotate />, ...props }) => {
  const { prefixCls } = useTheme();
  const { t } = useLocalization();

  const {
    className,
    children,
    dropdownStyle,
    dropdownClassName,
    container,
    appendToParentPortal,
    placeholder,
    onOpenChange,
    destroyOnClose,
    zIndex,
    placement,
    search,
    onChange,
    disabled,
    onSearch,
    allowClear,
    prompt,
    error,
    size,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: customizeValue,
    ...restProps
  } = props;

  const [isOpen, setOpen] = useControllableValue(props, {
    defaultValuePropName: "defaultOpen",
    valuePropName: "isOpen",
    trigger: "onOpenChange"
  });

  const [value, setValue] = useControllableValue(props, {
    defaultValuePropName: "defaultValue",
    valuePropName: "value",
    trigger: "onChange"
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState("");

  const [ref, setRef] = React.useState<HTMLDivElement | null>(null);

  const [overlayRef, setOverlayRef] = React.useState<HTMLDivElement | null>(null);

  const { styles, attributes, state, update } = usePopper(ref, overlayRef, {
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

  const reference = state?.rects.reference;

  useEffect(() => {
    update?.();
  }, [isOpen]);

  const handleOpen = useCallback(() => {
    if (!isOpen) {
      setOpen(true);
      inputRef.current?.focus();
    } else {
      setOpen(false);
      setInputValue("");
      inputRef.current?.blur();
    }
  }, [isOpen, search]);

  useClickAway(() => {
    isOpen && handleClose();
  }, ref);

  const handleClose = () => {
    setInputValue("");
    setOpen(false);
  };

  const childrenWrapper = isValidElement(children) ? [children] : children;

  const childrenFilter = !search
    ? childrenWrapper
    : childrenWrapper?.filter((p) =>
        p.props.value?.toString().toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      );

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        setOpen,
        setInputValue,
        size
      }}
    >
      <ClassNames>
        {({ cx }) => {
          const cls = cx([{ [`${prefixCls}-select-wrapper`]: true }, { [className || ""]: !!className }]);

          const containerCls = cx([
            { [`${prefixCls}-select`]: true },
            { [`${prefixCls}-select-opened`]: isOpen },
            { [`${prefixCls}-select-search`]: search },
            { [`${prefixCls}-select-clear`]: allowClear && !!value },
            { [`${prefixCls}-select-disabled`]: disabled },
            { [`${prefixCls}-select-error`]: !!error }
          ]);

          const dropdownCls = cx([
            { [`${prefixCls}-select-dropdown`]: true },
            { [dropdownClassName || ""]: Boolean(dropdownClassName) }
          ]);

          return (
            <Wrapper className={cls} {...restProps}>
              <Container
                className={containerCls}
                size={size}
                onClick={() => {
                  !disabled && handleOpen();
                }}
                ref={setRef}
              >
                <Selected className={`${prefixCls}-select-selector`}>
                  <SelectedContent className={`${prefixCls}-select-selector-content`}>
                    <span className={`${prefixCls}-select-selection-search`}>
                      <input
                        type="search"
                        className={`${prefixCls}-select-selection-search-input`}
                        ref={inputRef}
                        readOnly={!search}
                        autoComplete="off"
                        onChange={(e) => {
                          if (!disabled && !isOpen) {
                            setOpen(true);
                          }
                          setInputValue(e.target.value);
                          onSearch?.(e.target.value);
                        }}
                        value={inputValue}
                        disabled={disabled}
                      />
                    </span>
                    {!!value && !inputValue && (
                      <span className={`${prefixCls}-select-selection-item`}>
                        {childrenWrapper?.find((p) => p.props.value === value && value !== undefined)?.props.children}
                      </span>
                    )}
                    {!!placeholder && !(value || inputValue) && (
                      <span className={`${prefixCls}-select-selection-placeholder`}>{placeholder}</span>
                    )}
                  </SelectedContent>
                </Selected>

                <span className={`${prefixCls}-select-icon`}>{search && isOpen ? <SearchIcon /> : arrowIcon}</span>

                {allowClear && !!value && (
                  <span
                    className={`${prefixCls}-select-clear-icon`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setValue(undefined);
                      if (!isOpen) {
                        setOpen(true);
                        inputRef.current?.focus();
                      }
                    }}
                  >
                    <ClearIcon />
                  </span>
                )}

                <Portal container={container} appendToParentPortal={appendToParentPortal} appear={isOpen}>
                  <Transition
                    in={isOpen}
                    timeout={{
                      exit: 300,
                      enter: 300,
                      appear: 300
                    }}
                    unmountOnExit={destroyOnClose}
                    nodeRef={{ current: overlayRef }}
                    appear
                  >
                    {(state) => {
                      return (
                        <SelectDropdown
                          className={dropdownCls}
                          ref={setOverlayRef}
                          style={{
                            minWidth: reference?.width,
                            width: reference?.width,
                            zIndex,
                            ...dropdownStyle,
                            ...styles.popper
                          }}
                          data-opened={state !== "exited" ? "" : undefined}
                          data-enter={state === "entering" ? "" : undefined}
                          data-exit={state === "exiting" ? "" : undefined}
                          data-placement={convertPopperPlacement[attributes.popper?.["data-popper-placement"] || ""]}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <SelectDropdownContainer className={`${prefixCls}-select-dropdown-container`} size={size}>
                            {childrenFilter && childrenFilter.length ? (
                              <SelectDropdownGroup className={`${prefixCls}-select-dropdown-group`}>
                                {childrenFilter}
                              </SelectDropdownGroup>
                            ) : (
                              <Empty description={t("No Data")} type="NO_DATA" />
                            )}
                          </SelectDropdownContainer>
                        </SelectDropdown>
                      );
                    }}
                  </Transition>
                </Portal>
              </Container>

              {!error && !!prompt && (
                <Message className={`${prefixCls}-input-item-explain-prompt`} data-prompt="">
                  {prompt}
                </Message>
              )}
              {!!error && (
                <Message className={`${prefixCls}-input-item-explain-error`} data-error="">
                  {error}
                </Message>
              )}
            </Wrapper>
          );
        }}
      </ClassNames>
    </Context.Provider>
  );
};

Select.Option = Option;

Select.defaultProps = {
  placement: "bottom-left",
  size: "middle"
};

export default Select;
