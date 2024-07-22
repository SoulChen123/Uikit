import { ClassNamesContent, Theme } from "@emotion/react";
import { FADE_IN, FADE_OUT } from "../../theme/animations";

const useStyles = (theme: Theme, css: ClassNamesContent["css"]) =>
  css({
    [`&.${theme.prefixCls}-tooltip`]: {
      position: "absolute",
      zIndex: theme.zIndices.tooltip,
      display: "block",
      visibility: "visible",
      fontSize: 14,
      filter: "drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.08)) drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.08))"
    },
    [`&.${theme.prefixCls}-tooltip-hidden`]: {
      display: "none"
    },
    [`.${theme.prefixCls}-tooltip-inner`]: {
      backgroundColor: theme.system.blueGray[5],
      // borderRadius: 6,
      padding: 8,
      lineHeight: 1.5
    },
    [`.${theme.prefixCls}-tooltip-arrow`]: {
      position: "absolute",
      width: 0,
      height: 0,
      borderColor: "transparent",
      borderStyle: "solid"
    },
    [`&.${theme.prefixCls}-tooltip-placement-left, &.${theme.prefixCls}-tooltip-placement-leftTop, &.${theme.prefixCls}-tooltip-placement-leftBottom, &.${theme.prefixCls}-tooltip-placement-right, &.${theme.prefixCls}-tooltip-placement-rightTop, &.${theme.prefixCls}-tooltip-placement-rightBottom`]:
      {
        padding: "0 6px"
      },
    [`&.${theme.prefixCls}-tooltip-placement-top, &.${theme.prefixCls}-tooltip-placement-topLeft, &.${theme.prefixCls}-tooltip-placement-topRight,&.${theme.prefixCls}-tooltip-placement-bottom, &.${theme.prefixCls}-tooltip-placement-bottomLeft, &.${theme.prefixCls}-tooltip-placement-bottomRight`]:
      {
        padding: "6px 0"
      },

    // arrow styles
    [`&.${theme.prefixCls}-tooltip-placement-left .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-leftTop .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-leftBottom .${theme.prefixCls}-tooltip-arrow`]:
      {
        right: 1,
        marginTop: -6,
        borderWidth: "6px 0 6px 6px",
        borderLeftColor: theme.system.blueGray[5]
      },

    // right
    [`&.${theme.prefixCls}-tooltip-placement-right .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-rightTop .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-rightBottom .${theme.prefixCls}-tooltip-arrow`]:
      {
        left: 1,
        marginTop: -6,
        borderWidth: "6px 6px 6px 0",
        borderRightColor: theme.system.blueGray[5]
      },

    [`&.${theme.prefixCls}-tooltip-placement-top .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-topLeft .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-topRight .${theme.prefixCls}-tooltip-arrow`]:
      {
        bottom: 1,
        marginLeft: -6,
        borderWidth: "6px 6px 0",
        borderTopColor: theme.system.blueGray[5]
      },
    [`&.${theme.prefixCls}-tooltip-placement-bottom .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-bottomLeft .${theme.prefixCls}-tooltip-arrow, &.${theme.prefixCls}-tooltip-placement-bottomRight .${theme.prefixCls}-tooltip-arrow`]:
      {
        top: 1,
        marginLeft: -6,
        borderWidth: "0 6px 6px",
        borderBottomColor: theme.system.blueGray[5]
      },

    // arrow position
    [`&.${theme.prefixCls}-tooltip-placement-left .${theme.prefixCls}-tooltip-arrow,&.${theme.prefixCls}-tooltip-placement-right .${theme.prefixCls}-tooltip-arrow`]:
      {
        top: "50%"
      },
    [`&.${theme.prefixCls}-tooltip-placement-top .${theme.prefixCls}-tooltip-arrow,&.${theme.prefixCls}-tooltip-placement-bottom .${theme.prefixCls}-tooltip-arrow`]:
      {
        left: "50%"
      },
    [`&.${theme.prefixCls}-tooltip-placement-topLeft .${theme.prefixCls}-tooltip-arrow,&.${theme.prefixCls}-tooltip-placement-bottomLeft .${theme.prefixCls}-tooltip-arrow`]:
      {
        left: "6px",
        marginLeft: 0
      },
    [`&.${theme.prefixCls}-tooltip-placement-topRight .${theme.prefixCls}-tooltip-arrow,&.${theme.prefixCls}-tooltip-placement-bottomRight .${theme.prefixCls}-tooltip-arrow`]:
      {
        right: "6px"
      },
    [`&.${theme.prefixCls}-tooltip-placement-leftTop .${theme.prefixCls}-tooltip-arrow,&.${theme.prefixCls}-tooltip-placement-rightTop .${theme.prefixCls}-tooltip-arrow`]:
      {
        top: "6px",
        marginTop: 0
      },
    [`&.${theme.prefixCls}-tooltip-placement-leftBottom .${theme.prefixCls}-tooltip-arrow,&.${theme.prefixCls}-tooltip-placement-rightBottom .${theme.prefixCls}-tooltip-arrow`]:
      {
        bottom: "6px"
      },

    // animation

    [`&.${theme.prefixCls}-tooltip-fade-enter,&.${theme.prefixCls}-tooltip-fade-appear`]: {
      animationDuration: "0.2s",
      animationFillMode: "both",
      animationPlayState: "paused",
      opacity: 0,
      animationTimingFunction: "cubic-bezier(.23,1,.32,1)"
    },
    [`&.${theme.prefixCls}-tooltip-fade-leave`]: {
      animationDuration: "0.2s",
      animationFillMode: "both",
      animationPlayState: "paused",
      animationTimingFunction: "cubic-bezier(.645,.045,.355,1)"
    },

    [`&.${theme.prefixCls}-tooltip-fade-enter.${theme.prefixCls}-tooltip-fade-enter-active,
    &.${theme.prefixCls}-tooltip-fade-enter.${theme.prefixCls}-tooltip-fade-enter-active,
    &.${theme.prefixCls}-tooltip-fade-appear.${theme.prefixCls}-tooltip-fade-appear-active,
    &.${theme.prefixCls}-tooltip-fade-appear.${theme.prefixCls}-tooltip-fade-appear-active`]: {
      animationName: FADE_IN,
      animationPlayState: "running"
    },
    [`&.${theme.prefixCls}-tooltip-fade-leave.${theme.prefixCls}-tooltip-fade-leave-active,
    &.${theme.prefixCls}-tooltip-fade-leave.${theme.prefixCls}-tooltip-fade-leave-active`]: {
      animationName: FADE_OUT,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  });

export default useStyles;
