import { Locale as RcPickerLocale } from "rc-picker/lib/interface";
import { PickerProps, PickerRefConfig } from "rc-picker/lib/Picker";
import { Dayjs } from "dayjs";
import { RangePickerProps } from "rc-picker";

const SelectPlacements = ["bottomLeft", "bottomRight", "topLeft", "topRight"] as const;

export type SelectCommonPlacement = (typeof SelectPlacements)[number];

export type DirectionType = "ltr" | "rtl" | undefined;

export type AdditionalPickerLocaleLangProps = {
  placeholder: string;
  yearPlaceholder?: string;
  quarterPlaceholder?: string;
  monthPlaceholder?: string;
  weekPlaceholder?: string;
  rangeYearPlaceholder?: [string, string];
  rangeQuarterPlaceholder?: [string, string];
  rangeMonthPlaceholder?: [string, string];
  rangeWeekPlaceholder?: [string, string];
  rangePlaceholder?: [string, string];
};

export interface TimePickerLocale {
  placeholder?: string;
  rangePlaceholder?: [string, string];
}

export type AdditionalPickerLocaleProps = {
  dateFormat?: string;
  dateTimeFormat?: string;
  weekFormat?: string;
  monthFormat?: string;
};

export type PickerLocale = {
  lang: RcPickerLocale & AdditionalPickerLocaleLangProps;
  timePickerLocale: TimePickerLocale;
} & AdditionalPickerLocaleProps;

export interface IPickerProps
  extends Omit<PickerProps<Dayjs>, "prefixCls" | "locale" | "generateConfig" | "open" | "getPopupContainer"> {
  placement?: SelectCommonPlacement;
  size?: "large" | "middle" | "small";
  border?: boolean;
  isOpen?: boolean;
  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;
}

export interface IRangePickerProps
  extends Omit<RangePickerProps<Dayjs>, "prefixCls" | "locale" | "generateConfig" | "open" | "getPopupContainer"> {
  placement?: SelectCommonPlacement;
  size?: "large" | "middle" | "small";
  border?: boolean;
  isOpen?: boolean;
  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;
}

export type IPickerRefConfig = PickerRefConfig;
