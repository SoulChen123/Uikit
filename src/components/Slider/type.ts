import type { SliderProps, SliderRef } from "rc-slider/lib/Slider";
import type { ITooltipProps } from "../Tooltip/type";

export interface IHandleGeneratorInfo {
  value?: number;
  dragging?: boolean;
  index: number;
}

export type IHandleGeneratorFn = (config: {
  tooltipPrefixCls?: string;
  prefixCls?: string;
  info: IHandleGeneratorInfo;
}) => React.ReactElement;

export type IFormatter = (value?: number) => React.ReactNode;

export interface ISliderTooltipProps {
  isOpen?: boolean;
  placement?: ITooltipProps["placement"];
  /**
   * Rendered under the parent dom，default is document.body
   */
  container?: React.RefObject<HTMLElement | null>;

  /**
   * If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.
   */
  appendToParentPortal?: boolean;

  destroyOnClose?: boolean;
  formatter?: null | IFormatter;
}

export interface ISliderBaseProps {
  reverse?: boolean;
  min?: number;
  max?: number;
  step?: null | number;
  marks?: SliderProps["marks"];
  dots?: boolean;
  included?: boolean;
  disabled?: boolean;
  vertical?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  tooltip?: ISliderTooltipProps;
  autoFocus?: boolean;
}

export interface ISliderSingleProps extends ISliderBaseProps {
  range?: false;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
  handleStyle?: React.CSSProperties;
  trackStyle?: React.CSSProperties;
}

export interface ISliderRangeProps extends ISliderBaseProps {
  range: true | ISliderRange;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
  onAfterChange?: (value: [number, number]) => void;
  handleStyle?: React.CSSProperties[];
  trackStyle?: React.CSSProperties[];
}

interface ISliderRange {
  draggableTrack?: boolean;
}

export type IOpens = { [index: number]: boolean };

export type ISliderProps = ISliderSingleProps | ISliderRangeProps;
export type ISliderRef = SliderRef;
