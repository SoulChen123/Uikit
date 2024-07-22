import { Global, useTheme } from "@emotion/react";
import React, { useEffect } from "react";
import { cssTransition, toast, ToastContainer } from "react-toastify";
import useThemeMode from "../../../hooks/useThemeMode";
import Portal from "../../Portal/Portal";
import { POPOVER, IToastContainerProps } from "../type";

const Message: React.FC<IToastContainerProps> = (props) => {
  const { themeMode } = useThemeMode();
  const theme = useTheme();

  useEffect(() => {
    return () => toast.dismiss();
  }, []);

  return (
    <Portal appear>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeButton={false}
        transition={cssTransition({
          enter: `${theme.prefixCls}-toast-slide-show`,
          exit: `${theme.prefixCls}-toast-slide-hide`,
          appendPosition: true
        })}
        className={`${theme.prefixCls}-message-wrapper`}
        toastClassName={`${theme.prefixCls}-message-container`}
        progressClassName={`${theme.prefixCls}-message-progress`}
        bodyClassName={`${theme.prefixCls}-message-content`}
        hideProgressBar
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        enableMultiContainer
        containerId={POPOVER.MESSAGE}
        draggablePercent={50}
        draggable
        theme={themeMode}
        icon={<></>}
        {...props}
      />
      <Global
        styles={{
          [`.${theme.prefixCls}-message-wrapper`]: {
            width: "100vw",
            pointerEvents: "none",
            left: 0,
            transform: "none",
            "@media only screen and (max-width: 480px)": {
              width: "100vw"
            }
          },
          [`.${theme.prefixCls}-message-container`]: {
            padding: "10px 16px",
            fontSize: 14,
            lineHeight: 1.5,
            width: "fit-content",
            pointerEvents: "all",
            // borderRadius: 8,
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: theme.isDark
              ? "0px 8px 16px 0px rgba(255, 255, 255, 0.20)"
              : "0px 8px 16px 0px rgba(0, 0, 0, 0.15);",
            // background: theme.isDark ? theme.system.blueGray[3] : theme.system.white,
            borderColor: theme.system.gray[2],
            "@media only screen and (max-width: 480px)": {
              marginBottom: "1em"
            }
          },
          [`.${theme.prefixCls}-message-content`]: {
            padding: 0,
            alignItems: "flex-start",
            color: theme.system.black,
            "> div:last-child": {
              overflowWrap: "anywhere"
            }
          }
        }}
      />
    </Portal>
  );
};

export default Message;
