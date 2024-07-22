import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSafeLayoutEffect } from "../../hooks";
import { DefaultIcon } from "../../icons";
import { SPIN } from "../../theme/animations";
import { cx } from "../../utils/share";
import { IImageProps } from "./type";

const Wrapper = styled.span<IImageProps>(({ size, circle }) => {
  return {
    display: "inline-flex",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    width: size,
    height: size,
    ...(circle ? { borderRadius: "50%" } : {})
  };
});

const Loading = styled.span<IImageProps>`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20%;
  color: ${({ theme }) => theme.system.primary[6]};
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  border-top: 2px solid ${({ theme }) => theme.system.primary[6]};
  border-right: 2px solid ${({ theme }) => theme.system.primary[6]};
  border-bottom-style: solid;
  border-left-style: solid;
  border-radius: 99999px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-bottom-color: ${({ theme }) => theme.system.transparent};
  border-left-color: ${({ theme }) => theme.system.transparent};
  animation: 0.5s linear 0s infinite normal none running ${SPIN};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  &[data-hidden] {
    display: none;
  }
`;

const DefaultIconWrapper = styled(DefaultIcon)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.system.blueGray[9]};
`;

const Image = forwardRef<HTMLImageElement, IImageProps>(({ size, circle, className, hiddenLoading, ...props }, ref) => {
  const { prefixCls } = useTheme();

  const imageRef = useRef<HTMLImageElement>(null);

  useImperativeHandle<HTMLImageElement | null, HTMLImageElement | null>(ref, () => imageRef.current, []);

  const [loading, setLoading] = useState(!hiddenLoading);

  useSafeLayoutEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setLoading(false);
      };

      imageRef.current.onerror = () => {
        setLoading(false);
      };

      if (imageRef.current.complete) {
        setLoading(false);
      }
    }
  }, [props.src]);

  return (
    <Wrapper className={cx(`${prefixCls}-image`, className)} size={size} circle={circle}>
      {props.src ? (
        <Img alt="" {...props} ref={imageRef} data-hidden={loading ? "" : undefined} />
      ) : (
        <DefaultIconWrapper />
      )}
      {loading && props.src && (
        <Loading>
          <Spinner />
        </Loading>
      )}
    </Wrapper>
  );
});

export default Image;
