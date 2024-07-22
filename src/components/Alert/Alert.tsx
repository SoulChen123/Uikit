import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { forwardRef } from "react";
import { CloseIcon, ErrorIcon, ExclamationPointIcon, SuccessIcon } from "../../icons";
import { cx } from "../../utils/share";
import { IAlertProps } from "./type";

const Wrapper = styled.div<Pick<IAlertProps, "type">>(({ type, theme }) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    padding: "10px 16px",
    borderWidth: 1,
    borderStyle: "solid",
    // borderRadius: 8,
    ...(type === "info"
      ? {
          background: theme.system.blueGray[4],
          borderColor: theme.system.blueGray[5],
          [`.${theme.prefixCls}-alert-icon`]: {
            color: theme.system.gray[9]
          }
        }
      : {}),
    ...(type === "success"
      ? {
          background: theme.system.green[1],
          borderColor: theme.system.green[5],
          color: theme.system.green[5]
        }
      : {}),
    ...(type === "warn"
      ? {
          background: theme.system.yellow[1],
          borderColor: theme.system.yellow[5],
          color: theme.system.yellow[5]
        }
      : {}),
    ...(type === "error"
      ? {
          background: theme.system.red[1],
          borderColor: theme.system.red[5],
          color: theme.system.red[5]
        }
      : {})
  };
});

const Icon = styled.span<Pick<IAlertProps, "type">>(() => {
  return {
    padding: "2px 8px 2px 0",
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});

const Content = styled.div(() => {
  return {
    flex: 1
  };
});

const Message = styled.div<{ hasDescription?: boolean }>(({ theme, hasDescription }) => {
  return {
    color: theme.system.gray[9],
    ...(hasDescription
      ? {
          fontWeight: 500
        }
      : {})
  };
});

const Description = styled.div<{ hasMsg?: boolean }>(({ theme, hasMsg }) => {
  return {
    color: theme.system.gray[6],
    ...(hasMsg
      ? {
          paddingTop: 4
        }
      : {})
  };
});

const Close = styled.span(({ theme }) => {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 0 2px 4px",
    fontSize: 16,
    cursor: "pointer",
    color: theme.system.gray[5],
    ":hover": {
      color: theme.system.gray[9]
    }
  };
});

const ICON_TYPE = {
  error: <ErrorIcon />,
  info: <ExclamationPointIcon />,
  success: <SuccessIcon />,
  warn: <ExclamationPointIcon />
};

const Alert = forwardRef<HTMLDivElement, IAlertProps>((props, ref) => {
  const { className, message, type, description, icon, closeIcon, showIcon, closable, onClose, ...restProps } = props;
  const { prefixCls } = useTheme();

  const [open, setOpen] = useState(true);

  if (!open) return <></>;

  return (
    <Wrapper className={cx(`${prefixCls}-alert`, className)} {...restProps} ref={ref} type={type}>
      {!!showIcon && <Icon className={`${prefixCls}-alert-icon`}>{icon ? icon : ICON_TYPE[type || "info"]}</Icon>}
      <Content className={`${prefixCls}-alert-content`}>
        {!!message && (
          <Message className={`${prefixCls}-alert-message`} hasDescription={!!description}>
            {message}
          </Message>
        )}
        {!!description && (
          <Description className={`${prefixCls}-alert-description`} hasMsg={!!message}>
            {description}
          </Description>
        )}
      </Content>
      {!!closable && (
        <Close
          className={`${prefixCls}-alert-close`}
          onClick={(e) => {
            setOpen(false);
            onClose?.(e);
          }}
        >
          {closeIcon ? closeIcon : <CloseIcon />}
        </Close>
      )}
    </Wrapper>
  );
});

Alert.defaultProps = {
  type: "info",
  closable: true,
  showIcon: true
};

export default Alert;
