import { Global, keyframes, useTheme } from "@emotion/react";
import React from "react";

const top_center_show = keyframes`
  0% {
    transform: translateY(-24px);
  }
  100% {
    transform: translateY(0);
  }
`;

const top_center_hide = keyframes`
   0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-24px);
    opacity: 0;
  }
`;

const bottom_center_show = keyframes`
  0% {
    transform: translateY(24px);
  }
  100% {
    transform: translateY(0);
  }
`;

const bottom_center_hide = keyframes`
   0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(24px);
    opacity: 0;
  }
`;

const left_show = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const left_hide = keyframes`
   0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const right_show = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const right_hide = keyframes`
   0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const ToastSlideAnimation = () => {
  const { prefixCls } = useTheme();
  return (
    <Global
      styles={{
        [`.${prefixCls}-toast-slide-show--top-center`]: {
          animation: `${top_center_show} 0.3s ease-out both`
        },
        [`.${prefixCls}-toast-slide-hide--top-center`]: {
          animation: `${top_center_hide} 0.3s ease-in both`
        },
        [`.${prefixCls}-toast-slide-show--bottom-center`]: {
          animation: `${bottom_center_show} 0.3s ease-out both`
        },
        [`.${prefixCls}-toast-slide-hide--bottom-center`]: {
          animation: `${bottom_center_hide} 0.3s ease-in both`
        },
        [`.${prefixCls}-toast-slide-show--top-left,.${prefixCls}-toast-slide-show--bottom-left`]: {
          animation: `${left_show} 0.3s ease-out both`
        },
        [`.${prefixCls}-toast-slide-hide--top-left,.${prefixCls}-toast-slide-hide--bottom-left`]: {
          animation: `${left_hide} 0.3s ease-in both`
        },
        [`.${prefixCls}-toast-slide-show--top-right,.${prefixCls}-toast-slide-show--bottom-right`]: {
          animation: `${right_show} 0.3s ease-out both`
        },
        [`.${prefixCls}-toast-slide-hide--top-right,.${prefixCls}-toast-slide-hide--bottom-right`]: {
          animation: `${right_hide} 0.3s ease-in both`
        }
      }}
    />
  );
};

export default ToastSlideAnimation;
