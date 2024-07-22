import { Global, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { cssTransition, toast, ToastContainer } from "react-toastify";
import useThemeMode from "../../../hooks/useThemeMode";
import { CloseIcon } from "../../../icons";
import Portal from "../../Portal/Portal";
import { IToastContainerProps, POPOVER } from "../type";

const Notification: React.FC<IToastContainerProps> = (props) => {
  const { themeMode } = useThemeMode();
  const theme = useTheme();

  useEffect(() => {
    return () => toast.dismiss();
  }, []);

  return (
    <Portal appear>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        transition={cssTransition({
          enter: `${theme.prefixCls}-toast-slide-show`,
          exit: `${theme.prefixCls}-toast-slide-hide`,
          appendPosition: true
        })}
        closeButton={({ closeToast }) => (
          <span className="Toastify__close-button" onClick={closeToast}>
            <CloseIcon />
          </span>
        )}
        className={`${theme.prefixCls}-notification-wrapper`}
        toastClassName={`${theme.prefixCls}-notification-container`}
        progressClassName={`${theme.prefixCls}-notification-progress`}
        bodyClassName={`${theme.prefixCls}-notification-body`}
        closeOnClick={false}
        hideProgressBar
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        enableMultiContainer
        containerId={POPOVER.NOTIFICATION}
        draggablePercent={50}
        draggable
        theme={themeMode}
        icon={<></>}
        {...props}
      />
      <Global
        styles={{
          [`.${theme.prefixCls}-notification-wrapper`]: {
            width: "100vw",
            pointerEvents: "none",
            left: 0,
            transform: "none",
            "@media only screen and (max-width: 480px)": {
              width: "100vw"
            }
          },
          [`.${theme.prefixCls}-notification-container`]: {
            padding: "10px 16px",
            fontSize: 14,
            lineHeight: 1.5,
            fontWeight: 500,
            width: "fit-content",
            pointerEvents: "all",
            display: "grid",
            gap: 24,
            gridAutoFlow: "column",
            alignItems: "center",
            maxWidth: "375px",
            // borderRadius: 8,
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: theme.isDark
              ? "0px 8px 16px 0px rgba(255, 255, 255, 0.20)"
              : "0px 8px 16px 0px rgba(0, 0, 0, 0.15);",
            // background: theme.isDark ? theme.system.blueGray[3] : theme.system.white,
            borderColor: theme.system.gray[2],
            "@media only screen and (max-width: 480px)": {
              marginBottom: "1em",
              maxWidth: "100%"
            }
          },
          [`.${theme.prefixCls}-notification-body`]: {
            padding: 0,
            alignItems: "flex-start",
            margin: 0,
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

export default Notification;
