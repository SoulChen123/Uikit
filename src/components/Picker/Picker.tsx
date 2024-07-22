import RCPicker from "rc-picker";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import generate from "rc-picker/lib/generate/dayjs";
import useUIKit from "../../hooks/useUIKit";
import localeContext from "./locale";
import { IPickerProps, IPickerRefConfig } from "./type";
import { ClassNames, useTheme } from "@emotion/react";
import { Dayjs } from "dayjs";
import useStyles from "./useStyles";
import { CalendarIcon, ClearIcon, NextIcon, PrevIcon, SuperNextIcon, SuperPrevIcon } from "../../svgs";
import { getPlaceholder, transPlacement2DropdownAlign } from "./utils";
import PickerButton from "./PickerButton";
import { useControllableValue } from "ahooks";
import Portal from "../Portal/Portal";
import { cx } from "../../utils/share";

const DatePicker = forwardRef<IPickerRefConfig, IPickerProps>((props, ref) => {
  const {
    className,
    dropdownClassName,
    direction,
    placement,
    size,
    border,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpenChange,
    appendToParentPortal,
    container,
    ...restProps
  } = props;
  const { locale } = useUIKit();
  const { prefixCls } = useTheme();
  const innerRef = React.useRef<RCPicker<Dayjs>>(null);

  useImperativeHandle(ref, () => ({
    focus: () => innerRef.current?.focus(),
    blur: () => innerRef.current?.blur()
  }));

  const portalRef = useRef<HTMLDivElement>(null);

  const [opened, setOpen] = useControllableValue(props, {
    defaultValuePropName: "defaultOpen",
    valuePropName: "isOpen",
    trigger: "onOpenChange"
  });

  return (
    <div className={cx(`${prefixCls}-picker-wrapper`, className)}>
      <Portal appear={opened} appendToParentPortal={appendToParentPortal} container={container} ref={portalRef} />
      <ClassNames>
        {(args) => {
          const { hashId, dropdownHashId } = useStyles({ ...args, size, border });
          return (
            <RCPicker
              generateConfig={generate}
              locale={localeContext[locale].lang}
              prefixCls={`${prefixCls}-picker`}
              placeholder={getPlaceholder(props.picker, localeContext[locale])}
              ref={innerRef}
              className={hashId}
              dropdownClassName={args.cx(dropdownHashId, dropdownClassName)}
              suffixIcon={<CalendarIcon />}
              dropdownAlign={transPlacement2DropdownAlign(direction, placement)}
              superPrevIcon={<SuperPrevIcon />}
              prevIcon={<PrevIcon />}
              superNextIcon={<SuperNextIcon />}
              nextIcon={<NextIcon />}
              clearIcon={<ClearIcon />}
              defaultOpen={opened}
              open={opened}
              onOpenChange={setOpen}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              getPopupContainer={() => portalRef.current!}
              components={{
                button: PickerButton
              }}
              transitionName={`${prefixCls}-picker-slide`}
              {...restProps}
            />
          );
        }}
      </ClassNames>
    </div>
  );
});

DatePicker.defaultProps = {
  size: "middle",
  border: true
};

export default DatePicker;
