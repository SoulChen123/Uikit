import { ClassNamesContent } from "@emotion/react";
import { opacify } from "polished";
import { SLIDE_DOWN_IN, SLIDE_DOWN_OUT, SLIDE_UP_IN, SLIDE_UP_OUT } from "../../theme/animations";
import { IPickerProps } from "./type";

const handleSizeStyles = (size: IPickerProps["size"]) => {
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
};

const useStyles = ({ css, theme, size, border }: ClassNamesContent & Pick<IPickerProps, "size" | "border">) => {
  const { prefixCls } = theme;

  const hashId = css({
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: border ? theme.system.gray[4] : theme.system.transparent,
    display: "inline-flex",
    alignItems: "center",
    ...(border ? handleSizeStyles(size) : { ...handleSizeStyles(size), padding: 0, height: "auto" }),

    ":hover": {
      [`.${prefixCls}-picker-clear`]: {
        opacity: 1
      }
    },

    [`&.${prefixCls}-picker-range`]: {
      display: "inline-flex",
      position: "relative",
      [`.${prefixCls}-picker-clear`]: {
        ...(border ? { insetInlineEnd: size === "large" ? 16 : 12 } : {})
      }
    },
    [`&.${prefixCls}-picker-focused,&:hover`]: {
      borderColor: border ? theme.system.primary[6] : theme.system.transparent
    },
    [`&.${prefixCls}-picker-focused`]: {
      boxShadow: border ? `0px 0px 0px 3px ${opacify(-0.7, theme.system.primary[6])}` : "none"
    },

    // disabled
    [`&.${prefixCls}-picker-disabled`]: {
      boxShadow: "none",
      borderColor: border ? theme.system.gray[3] : theme.system.transparent,
      background: theme.system.gray[2],
      cursor: "not-allowed",
      [`.${prefixCls}-picker-suffix,.${prefixCls}-picker-range-separator`]: {
        color: theme.system.gray[5]
      }
    },
    [`.${prefixCls}-picker-input`]: {
      width: "100%",
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      "&>input": {
        outline: "none",
        border: 0,
        padding: 0,
        margin: 0,
        background: theme.system.transparent,
        color: "inherit",
        fontSize: "inherit",
        ...(!border ? { textAlign: "center" } : {}),
        "::placeholder": {
          color: theme.system.gray[7]
        },
        ":placeholder-shown": {
          textOverflow: "ellipsis"
        },
        "&[disabled]": {
          cursor: "not-allowed",
          color: theme.system.gray[5],
          "::placeholder": {
            color: theme.system.gray[5]
          }
        }
      }
    },
    [`.${prefixCls}-picker-range-separator`]: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 8px",
      color: theme.system.gray[7]
    },
    [`.${prefixCls}-picker-suffix`]: {
      display: "inline-flex",
      alignItems: "center",
      color: theme.system.gray[9]
    },
    [`.${prefixCls}-picker-clear`]: {
      width: 18,
      height: 18,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      opacity: 0,
      color: theme.system.gray[7],
      transition: "opacity .2s,color .2s",
      insetInlineEnd: 0,
      cursor: "pointer",
      background: theme.system.blueGray[1],
      display: "flex",
      alignItems: "center",
      ":hover": {
        color: theme.system.gray[9]
      }
    }
  });

  const dropdownHashId = css({
    position: "absolute",
    zIndex: theme.zIndices.dropdown,

    [`&.${prefixCls}-picker-dropdown-hidden`]: {
      display: "none"
    },
    [`.${prefixCls}-picker-range-wrapper`]: {
      display: "flex",
      position: "relative"
    },
    [`.${prefixCls}-picker-panel-container`]: {
      overflow: "hidden",
      background: theme.system.blueGray[1],
      // borderRadius: 8,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.system.blueGray[3],
      boxShadow:
        "0px 6px 30px 5px rgba(0, 0, 0, 0.05), 0px 16px 24px 2px rgba(0, 0, 0, 0.04), 0px 8px 10px -5px rgba(0, 0, 0, 0.08)"
    },
    [`.${prefixCls}-picker-panel-layout`]: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "stretch"
    },
    [`.${prefixCls}-picker-panels`]: {
      display: "flex",
      flexWrap: "wrap"
    },
    [`.${prefixCls}-picker-date-panel`]: {
      display: "flex",
      flexDirection: "column"
    },
    [`.${prefixCls}-picker-header`]: {
      display: "flex",
      height: 40,
      color: theme.system.gray[9],
      borderBottom: `1px solid ${theme.system.blueGray[3]}`,
      padding: "0 4px",
      button: {
        padding: "0 4px",
        margin: 0,
        border: 0,
        cursor: "pointer",
        background: "none",
        color: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ":hover": {
          color: theme.system.gray[9]
        }
      }
    },
    [`.${prefixCls}-picker-header-view`]: {
      color: theme.system.gray[9],
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      button: {
        fontWeight: 600,
        ":hover": {
          color: theme.system.primary[6]
        }
      }
    },
    [`.${prefixCls}-picker-body`]: {
      padding: "0 16px 16px"
    },
    [`.${prefixCls}-picker-content`]: {
      th: {
        width: 40,
        height: 40,
        color: theme.system.gray[9],
        verticalAlign: "middle"
      }
    },
    [`.${prefixCls}-picker-cell`]: {
      width: 40,
      height: 40,
      padding: 4,
      verticalAlign: "middle",
      color: theme.system.gray[5],
      cursor: "pointer",
      position: "relative",
      "::before": {
        content: "''",
        position: "absolute",
        height: 32,
        top: "50%",
        transform: "translateY(-50%)",
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1
      },
      [`&:not(.${prefixCls}-picker-cell-selected):not(.${prefixCls}-picker-cell-range-start):not(.${prefixCls}-picker-cell-range-end):not(.${prefixCls}-picker-cell-disabled):hover`]:
        {
          [`.${prefixCls}-picker-cell-inner`]: {
            background: theme.system.blueGray[3]
          }
        }
    },
    [`.${prefixCls}-picker-cell-in-view:not(.${prefixCls}-picker-cell-disabled)`]: {
      color: theme.system.gray[9]
    },
    [`.${prefixCls}-picker-cell-inner`]: {
      width: "100%",
      height: "100%",
      // borderRadius: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    [`.${prefixCls}-picker-cell-today .${prefixCls}-picker-cell-inner`]: {
      border: `1px solid ${theme.system.primary[6]}`,
      background: opacify(-0.9, theme.system.primary[6]),
      color: theme.system.primary[6]
    },
    [`.${prefixCls}-picker-cell-in-range,.${prefixCls}-picker-cell-range-hover`]: {
      "::before": {
        background: opacify(-0.9, theme.system.primary[6])
      }
    },
    [`.${prefixCls}-picker-cell-range-hover-start:not(.${prefixCls}-picker-cell-in-range),.${prefixCls}-picker-cell-range-start:not(.${prefixCls}-picker-cell-range-start-single):not(.${prefixCls}-picker-cell-range-start-near-hover)`]:
      {
        "::before": {
          // borderTopLeftRadius: 6,
          // borderBottomLeftRadius: 6,
          marginInlineStart: 4,
          background: opacify(-0.9, theme.system.primary[6])
        }
      },
    [`.${prefixCls}-picker-cell-range-hover-end:not(.${prefixCls}-picker-cell-in-range),.${prefixCls}-picker-cell-range-end:not(.${prefixCls}-picker-cell-range-end-single):not(.${prefixCls}-picker-cell-range-end-near-hover)`]:
      {
        "::before": {
          // borderTopRightRadius: 6,
          // borderBottomRightRadius: 6,
          marginInlineEnd: 4,
          background: opacify(-0.9, theme.system.primary[6])
        }
      },
    [`.${prefixCls}-picker-cell-selected .${prefixCls}-picker-cell-inner,.${prefixCls}-picker-cell-range-start .${prefixCls}-picker-cell-inner,.${prefixCls}-picker-cell-range-end .${prefixCls}-picker-cell-inner`]:
      {
        background: theme.system.primary[6],
        color: theme.isDark ? theme.system.gray[9] : theme.system.gray[1]
      },

    [`.${prefixCls}-picker-cell-disabled`]: {
      cursor: "not-allowed",
      color: theme.system.gray[5],
      "::before": {
        background: opacify(-0.7, theme.system.gray[5])
      },
      [`.${prefixCls}-picker-cell-inner`]: {
        cursor: "not-allowed"
      },
      [`&.${prefixCls}-picker-cell-today .${prefixCls}-picker-cell-inner`]: {
        color: theme.system.gray[5],
        borderColor: theme.system.gray[5],
        background: opacify(-0.7, theme.system.gray[5])
      },
      [`&.${prefixCls}-picker-cell-selected .${prefixCls}-picker-cell-inner`]: {
        background: opacify(-0.7, theme.system.gray[5])
      }
    },

    [`.${prefixCls}-picker-footer`]: {
      borderTop: `1px solid ${theme.system.gray[3]}`
    },
    [`.${prefixCls}-picker-ranges`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px"
    },
    [`.${prefixCls}-picker-now-btn`]: {
      color: theme.system.primary[6],
      cursor: "pointer",
      ":hover": {
        color: theme.system.primary[5]
      }
    },
    [`.${prefixCls}-picker-ok`]: {
      marginInlineStart: "auto"
    },

    // month

    [`.${prefixCls}-picker-month-panel`]: {
      [`.${prefixCls}-picker-cell`]: {
        width: 56,
        height: 56,
        padding: "12px 4px"
      },
      [`.${prefixCls}-picker-body`]: {
        padding: "0 16px 8px"
      }
    },

    // year
    [`.${prefixCls}-picker-year-panel`]: {
      [`.${prefixCls}-picker-cell`]: {
        width: 64,
        height: 56,
        padding: "12px 4px"
      },
      [`.${prefixCls}-picker-body`]: {
        padding: "0 16px 8px"
      }
    },

    // decade
    [`.${prefixCls}-picker-decade-panel`]: {
      [`.${prefixCls}-picker-cell`]: {
        width: 96,
        height: 56,
        padding: "12px 4px"
      },
      [`.${prefixCls}-picker-body`]: {
        padding: "0 16px 8px"
      }
    },

    // quarter
    [`.${prefixCls}-picker-quarter-panel`]: {
      [`.${prefixCls}-picker-cell`]: {
        width: 48,
        height: 48,
        padding: "8px 4px"
      },
      [`.${prefixCls}-picker-body`]: {
        padding: "0 16px 4px"
      }
    },

    // time
    [`.${prefixCls}-picker-time-panel`]: {
      paddingTop: 4,
      [`.${prefixCls}-picker-content`]: {
        display: "flex",
        height: 224
      }
    },
    [`.${prefixCls}-picker-time-panel-column`]: {
      flex: "1 0 auto",
      margin: "4px 0",
      padding: 0,
      overflowY: "auto",
      textAlign: "start",
      overflowX: "hidden",
      "::-webkit-scrollbar": {
        width: 4,
        height: 4
      },
      "::-webkit-scrollbar-track": {
        // borderRadius: 4,
        boxShadow: "none",
        backgroundColor: "inherit"
      },
      "::-webkit-scrollbar-thumb": {
        // borderRadius: 4,
        background: theme.system.gray[6]
      },
      ":not(:first-of-type)": {
        borderInlineStart: `1px solid ${theme.system.gray[3]}`
      }
    },
    [`.${prefixCls}-picker-time-panel-cell`]: {
      marginInline: 6
    },
    [`.${prefixCls}-picker-time-panel-cell-inner`]: {
      width: 48,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // borderRadius: 4,
      cursor: "pointer",
      ":hover": {
        background: theme.system.blueGray[3]
      }
    },
    [`.${prefixCls}-picker-time-panel-cell-selected .${prefixCls}-picker-time-panel-cell-inner`]: {
      background: theme.system.primary[6],
      color: theme.isDark ? theme.system.gray[9] : theme.system.gray[1]
    },
    [`.${prefixCls}-picker-time-panel-cell-disabled`]: {
      cursor: "not-allowed",
      color: theme.system.gray[5],
      [`.${prefixCls}-picker-time-panel-cell-inner`]: {
        cursor: "not-allowed",
        ":hover": {
          background: "none"
        }
      },
      [`&.${prefixCls}-picker-cell-selected .${prefixCls}-picker-cell-inner`]: {
        background: opacify(-0.7, theme.system.gray[5])
      }
    },

    // animation
    [`&.${theme.prefixCls}-picker-slide-enter,&.${theme.prefixCls}-picker-slide-appear`]: {
      animationDuration: "0.3s",
      animationFillMode: "both",
      animationPlayState: "paused",
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transformOrigin: "100% 100%",
      opacity: 0
    },

    [`&.${theme.prefixCls}-picker-slide-leave`]: {
      animationDuration: "0.3s",
      animationFillMode: "both",
      animationPlayState: "paused",
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
    },

    // animation bottom

    [`&.${theme.prefixCls}-picker-slide-enter.${theme.prefixCls}-picker-slide-enter-active.${theme.prefixCls}-picker-dropdown-placement-bottomLeft,
    &.${theme.prefixCls}-picker-slide-enter.${theme.prefixCls}-picker-slide-enter-active.${theme.prefixCls}-picker-dropdown-placement-bottomRight,
    &.${theme.prefixCls}-picker-slide-appear.${theme.prefixCls}-picker-slide-appear-active.${theme.prefixCls}-picker-dropdown-placement-bottomLeft,
    &.${theme.prefixCls}-picker-slide-appear.${theme.prefixCls}-picker-slide-appear-active.${theme.prefixCls}-picker-dropdown-placement-bottomRight`]:
      {
        animationName: SLIDE_UP_IN,
        animationPlayState: "running"
      },
    [`&.${theme.prefixCls}-picker-slide-leave.${theme.prefixCls}-picker-slide-leave-active.${theme.prefixCls}-picker-dropdown-placement-bottomLeft,
    &.${theme.prefixCls}-picker-slide-leave.${theme.prefixCls}-picker-slide-leave-active.${theme.prefixCls}-picker-dropdown-placement-bottomRight`]:
      {
        animationName: SLIDE_UP_OUT,
        animationPlayState: "running",
        pointerEvents: "none"
      },

    // animation top
    [`&.${theme.prefixCls}-picker-slide-enter.${theme.prefixCls}-picker-slide-enter-active.${theme.prefixCls}-picker-dropdown-placement-topLeft,
    &.${theme.prefixCls}-picker-slide-enter.${theme.prefixCls}-picker-slide-enter-active.${theme.prefixCls}-picker-dropdown-placement-topRight,
    &.${theme.prefixCls}-picker-slide-appear.${theme.prefixCls}-picker-slide-appear-active.${theme.prefixCls}-picker-dropdown-placement-topLeft,
    &.${theme.prefixCls}-picker-slide-appear.${theme.prefixCls}-picker-slide-appear-active.${theme.prefixCls}-picker-dropdown-placement-topRight`]:
      {
        animationName: SLIDE_DOWN_IN,
        animationPlayState: "running"
      },
    [`&.${theme.prefixCls}-picker-slide-leave.${theme.prefixCls}-picker-slide-leave-active.${theme.prefixCls}-picker-dropdown-placement-topLeft,
    &.${theme.prefixCls}-picker-slide-leave.${theme.prefixCls}-picker-slide-leave-active.${theme.prefixCls}-picker-dropdown-placement-topRight`]:
      {
        animationName: SLIDE_DOWN_OUT,
        animationPlayState: "running",
        pointerEvents: "none"
      }
  });

  return { hashId, dropdownHashId };
};

export default useStyles;
