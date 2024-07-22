import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { forwardRef } from "react";
import { IFormatter, ISliderRef, IOpens, ISliderTooltipProps, ISliderProps } from "./type";
import RcSlider from "rc-slider";
import type { SliderProps } from "rc-slider";
import { opacify } from "polished";
import { ITooltipProps } from "../Tooltip";
import SliderTooltip from "./SliderTooltip";
import { __DEV__ } from "../../config";

const Wrapper = styled(RcSlider)(({ theme: { prefixCls, system } }) => ({
  fontSize: 14,
  cursor: "pointer",
  touchAction: "none",
  position: "relative",

  [`.${prefixCls}-slider-rail`]: {
    position: "absolute",
    background: system.blueGray[5],
    borderRadius: 9999
  },
  [`.${prefixCls}-slider-track`]: {
    position: "absolute",
    background: system.blueGray[7],
    borderRadius: 9999
  },
  [`.${prefixCls}-slider-step`]: {
    position: "absolute",
    pointerEvents: "none",
    background: "0 0"
  },
  [`.${prefixCls}-slider-handle`]: {
    width: 10,
    height: 16,
    background: system.blueGray[5],
    cursor: "pointer",
    position: "relative",
    "::after": {
      content: "''",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      transform: "translate(-50%,-50%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='11' height='16' viewBox='0 0 11 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='16' transform='translate(0.571533)' fill='%238A8E9D'/%3E%3Cpath d='M4.07153 4V12' stroke='black' stroke-width='0.5'/%3E%3Cpath d='M5.57153 4V12' stroke='black' stroke-width='0.5'/%3E%3Cpath d='M7.07153 4V12' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E%0A")`
    }
  },
  [`.${prefixCls}-slider-handle-dragging`]: {
    boxShadow: `0px 0px 0px 1px ${opacify(-0.7, system.gray[9])}`
  },
  [`.${prefixCls}-slider-dot`]: {
    width: 6,
    height: 10,
    borderStyle: "solid",
    background: system.blueGray[5],
    position: "absolute"
  },
  [`.${prefixCls}-slider-dot-active`]: {
    background: system.blueGray[7]
  },

  [`.${prefixCls}-slider-mark-text`]: {
    position: "absolute",
    wordBreak: "keep-all",
    cursor: "pointer",
    userSelect: "none",
    textAlign: "center",
    display: "inline-block",
    color: system.gray[9],
    fontSize: 12,
    fontWeight: 400
  },
  [`.${prefixCls}-slider-mark-text-active`]: {
    color: system.gray[7]
  },

  // disabled
  [`&.${prefixCls}-slider-disabled`]: {
    [`.${prefixCls}-slider-rail`]: {
      background: system.blueGray[4]
    },
    [`.${prefixCls}-slider-track`]: {
      background: system.blueGray[4]
    },
    [`.${prefixCls}-slider-handle`]: {
      background: system.blueGray[4],
      "::after": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='11' height='16' viewBox='0 0 11 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='16' transform='translate(0.571289)' fill='%23292C38'/%3E%3Cpath d='M4.07129 4V12' stroke='black' stroke-width='0.5'/%3E%3Cpath d='M5.57129 4V12' stroke='black' stroke-width='0.5'/%3E%3Cpath d='M7.07129 4V12' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E%0A")`
      }
    },
    [`.${prefixCls}-slider-handle-dragging`]: {
      boxShadow: "none"
    },
    [`.${prefixCls}-slider-dot`]: {
      background: system.blueGray[4]
    },
    [`.${prefixCls}-slider-dot-active`]: {
      background: system.blueGray[4]
    },
    [`.${prefixCls}-slider-mark-text`]: {
      color: system.gray[5]
    },
    [`.${prefixCls}-slider-mark-text-active`]: {
      color: system.gray[5]
    }
  },

  // horizontal

  [`&.${prefixCls}-slider-horizontal`]: {
    padding: "10px 0",
    height: 24,
    marginBottom: 16,

    [`&.${prefixCls}-slider-with-marks`]: {
      marginBottom: 44
    },

    [`.${prefixCls}-slider-rail`]: {
      height: 4,
      width: "100%",
      top: "50%",
      transform: "translateY(-50%)"
    },
    [`.${prefixCls}-slider-track`]: {
      height: 4,
      top: "50%",
      transform: "translateY(-50%)"
    },
    [`.${prefixCls}-slider-step`]: {
      width: "100%",
      height: 4,
      top: "50%",
      transform: "translateY(-50%)"
    },
    [`.${prefixCls}-slider-handle`]: {
      position: "absolute",
      top: "50%"
    },
    [`.${prefixCls}-slider-dot`]: {
      top: "50%"
    },
    [`.${prefixCls}-slider-mark`]: {
      position: "absolute",
      top: 26,
      width: "100%"
    }
  },

  // vertical
  [`&.${prefixCls}-slider-vertical`]: {
    padding: "0 10px",
    width: 24,
    height: "100%",

    [`&.${prefixCls}-slider-with-marks`]: {
      marginRight: 44
    },

    [`.${prefixCls}-slider-rail`]: {
      width: 4,
      height: "100%",
      left: "50%",
      transform: "translateX(-50%)"
    },
    [`.${prefixCls}-slider-track`]: {
      width: 4,
      left: "50%",
      transform: "translateX(-50%)"
    },
    [`.${prefixCls}-slider-step`]: {
      height: "100%",
      width: 4,
      left: "50%",
      transform: "translateX(-50%)"
    },
    [`.${prefixCls}-slider-handle`]: {
      position: "absolute",
      left: "50%"
    },
    [`.${prefixCls}-slider-dot`]: {
      left: "50%"
    },
    [`.${prefixCls}-slider-mark`]: {
      position: "absolute",
      left: 26,
      top: 0,
      height: "100%"
    }
  }
}));

const defaultFormatter: IFormatter = (val) => (typeof val === "number" ? val.toString() : "");

const Slider = forwardRef<ISliderRef, ISliderProps>((props, ref) => {
  const { prefixCls } = useTheme();

  const { range, ...restProps } = props;

  const [opens, setOpens] = React.useState<IOpens>({});

  const toggleTooltipOpen = (index: number, open: boolean) => {
    setOpens((prev: IOpens) => ({ ...prev, [index]: open }));
  };

  const getTooltipPlacement = (placement?: ITooltipProps["placement"], vertical?: boolean) => {
    if (placement) {
      return placement;
    }
    if (!vertical) {
      return "top";
    }
    return "left";
  };

  // Range config
  const [mergedRange, draggableTrack] = React.useMemo(() => {
    if (!range) {
      return [false];
    }

    return typeof range === "object" ? [true, range.draggableTrack] : [true, false];
  }, [range]);

  const handleRender: SliderProps["handleRender"] = (node, info) => {
    const { index, dragging } = info;

    const { tooltip = {}, vertical } = props;

    const tooltipProps: ISliderTooltipProps = {
      ...tooltip
    };
    const {
      isOpen: tooltipOpen,
      placement: tooltipPlacement,
      container,
      appendToParentPortal,
      destroyOnClose,
      formatter: tipFormatter
    } = tooltipProps;

    let mergedTipFormatter;
    if (tipFormatter || tipFormatter === null) {
      mergedTipFormatter = tipFormatter;
    } else {
      mergedTipFormatter = defaultFormatter;
    }

    const isTipFormatter = mergedTipFormatter ? opens[index] || dragging : false;
    const mergeOpen = tooltipOpen ?? (tooltipOpen === undefined && isTipFormatter);

    const passedProps = {
      ...node.props,
      onMouseEnter: () => toggleTooltipOpen(index, true),
      onMouseLeave: () => toggleTooltipOpen(index, false)
    };

    return (
      <SliderTooltip
        isOpen={mergeOpen}
        overlay={mergedTipFormatter ? mergedTipFormatter(info.value) : ""}
        placement={getTooltipPlacement(tooltipPlacement, vertical)}
        key={index}
        appendToParentPortal={appendToParentPortal}
        container={container}
        destroyOnClose={destroyOnClose}
      >
        {React.cloneElement(node, passedProps)}
      </SliderTooltip>
    );
  };

  return (
    <Wrapper
      {...(restProps as any)}
      prefixCls={`${prefixCls}-slider`}
      range={mergedRange}
      draggableTrack={draggableTrack}
      handleStyle={{
        transform: props.vertical
          ? props.reverse
            ? "translate(-50%,-50%)"
            : "translate(-50%,50%)"
          : props.reverse
          ? "translate(50%,-50%)"
          : "translate(-50%,-50%)"
      }}
      dotStyle={{
        transform: props.vertical
          ? props.reverse
            ? "translate(-50%,-50%)"
            : "translate(-50%,50%)"
          : props.reverse
          ? "translate(50%,-50%)"
          : "translate(-50%,-50%)"
      }}
      handleRender={handleRender}
      ref={ref}
    />
  );
});

if (__DEV__) {
  Slider.displayName = "Slider";
}

export default Slider;
