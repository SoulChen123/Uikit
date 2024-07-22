import { RangePicker as RCRangePicker } from "rc-picker";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import generate from "rc-picker/lib/generate/dayjs";
import useUIKit from "../../../hooks/useUIKit";
import localeContext from "../locale";
import { IPickerRefConfig, IRangePickerProps } from "../type";
import { ClassNames, useTheme } from "@emotion/react";
import { Dayjs } from "dayjs";
import useStyles from "../useStyles";
import {
  CalendarIcon,
  ClearIcon,
  NextIcon,
  PrevIcon,
  SeparatorIcon,
  SuperNextIcon,
  SuperPrevIcon
} from "../../../svgs";
import { getRangePlaceholder, transPlacement2DropdownAlign } from "../utils";
import PickerButton from "../PickerButton";
import { useControllableValue } from "ahooks";
import { cx } from "../../../utils/share";
import Portal from "../../Portal/Portal";

const RangePicker = forwardRef<IPickerRefConfig, IRangePickerProps>((props, ref) => {
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
  const innerRef = React.useRef<RCRangePicker<Dayjs>>(null);

  const [opened, setOpen] = useControllableValue(props, {
    defaultValuePropName: "defaultOpen",
    valuePropName: "isOpen",
    trigger: "onOpenChange"
  });

  const portalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => innerRef.current?.focus(),
    blur: () => innerRef.current?.blur()
  }));

  return (
    <div className={cx(`${prefixCls}-picker-wrapper`, `${prefixCls}-picker-range-wrapper`, className)}>
      <Portal appear={opened} appendToParentPortal={appendToParentPortal} container={container} ref={portalRef} />
      <ClassNames>
        {(args) => {
          const { hashId, dropdownHashId } = useStyles({ ...args, size, border });
          return (
            <RCRangePicker
              generateConfig={generate}
              locale={localeContext[locale].lang}
              prefixCls={`${prefixCls}-picker`}
              placeholder={getRangePlaceholder(props.picker, localeContext[locale])}
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
              separator={<SeparatorIcon />}
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

RangePicker.defaultProps = {
  size: "middle",
  border: true
};

export default RangePicker;
