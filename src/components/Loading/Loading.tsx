import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { ILoadingProps } from "./type";
import { keyframes, useTheme } from "@emotion/react";
import { cx } from "../../utils/share";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingJson from "./loading.json";
import debounce from "lodash/debounce";

const CSS_LOADER_LEFT = keyframes`
 0% {
    transform:rotateY(0) translateY(-20px);
  }
  50%{
    transform:rotateY(180deg) translateY(-20px);

  }
  100% {
    transform:rotateY(360deg) translateY(-20px);
  }
`;

const Wrapper = styled.div<{ opt?: number }>`
  position: relative;

  .${({ theme }) => theme.prefixCls}-loading-blur {
    user-select: none;
    pointer-events: none;
    opacity: ${({ opt }) => opt};
  }

  .${({ theme }) => theme.prefixCls}-loading-container {
    position: relative;
    transition: opacity 0.3s;
  }
`;

const PlayerWrapper = styled(Player)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  z-index: ${({ theme }) => theme.zIndices.loading};
`;

const OXFUNLoader = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndices.loading};
  & > svg:first-of-type {
    transform: translateY(20px);
  }
  & > svg:last-of-type {
    animation-name: ${CSS_LOADER_LEFT};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;

function shouldDelay(loading?: boolean, delay?: number): boolean {
  return !!loading && !!delay && !isNaN(Number(delay));
}

const Loading = forwardRef<HTMLDivElement, ILoadingProps>(
  ({ children, loading, className, zIndex, opacity, type, delay = 0, ...props }, ref) => {
    const { prefixCls } = useTheme();

    const [wrapperLoading, setWrapperLoading] = React.useState<boolean>(!!loading && !shouldDelay(loading, delay));

    React.useEffect(() => {
      if (loading) {
        const showLoading = debounce(() => {
          setWrapperLoading(true);
        }, delay);
        showLoading();
        return () => {
          showLoading.cancel();
        };
      }

      setWrapperLoading(false);
    }, [delay, loading]);

    return (
      <Wrapper
        className={cx(`${prefixCls}-loading`, className)}
        data-loading={wrapperLoading ? "" : undefined}
        opt={opacity}
        {...props}
        ref={ref}
      >
        {wrapperLoading && type === "NORMAL" && (
          <PlayerWrapper autoplay loop src={loadingJson} className={`${prefixCls}-loading-icon`} style={{ zIndex }} />
        )}
        {wrapperLoading && type === "LOGO" && (
          <OXFUNLoader className={`${prefixCls}-loading-icon`} style={{ zIndex }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={71} height={40} fill="none">
              <path fill="url(#a)" d="M33.34 1.111h3.984V7.32h-3.983V1.11Z" />
              <path fill="url(#b)" d="M48.528 1.111h3.983V7.32h-3.983V1.11Z" />
              <path fill="url(#c)" d="M33.34 10.577h3.984v6.208h-3.983v-6.208Z" />
              <path fill="url(#d)" d="M48.528 10.577h3.983v6.208h-3.983v-6.208Z" />
              <path fill="url(#e)" d="M37.324 7.32h11.204v3.257H37.324V7.32Z" />
              <path fill="url(#l)" d="M55.997 13.528h3.983v3.257h-3.983v-3.257Z" />
              <path fill="url(#r)" d="M14.668 1.111h11.204v3.257H14.668V1.111Z" />
              <path fill="url(#s)" d="M10.685 4.368h3.983v9.16h-3.983v-9.16Z" />
              <path fill="url(#t)" d="M25.872 4.368h3.983v9.16h-3.983v-9.16Z" />
              <path fill="url(#u)" d="M14.668 13.528h11.204v3.257H14.668v-3.257Z" />
              <defs>
                <linearGradient id="a" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="b" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="c" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="d" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="e" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>

                <linearGradient id="l" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="r" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="s" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="t" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="u" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={71} height={40} fill="none">
              <path fill="url(#f)" d="M25.374 22.79h3.983v12.418h-3.983V22.79Z" />
              <path fill="url(#g)" d="M40.56 22.79h3.984v12.418h-3.983V22.79Z" />
              <path fill="url(#h)" d="M29.357 35.208h11.204v3.257H29.357v-3.257Z" />
              <path fill="url(#i)" d="M2.718 22.79H6.7v15.675H2.718V22.79Z" />
              <path fill="url(#j)" d="M2.718 22.79h19.17v3.258H2.718V22.79Z" />
              <path fill="url(#k)" d="M2.718 29.1h15.187v3.258H2.718V29.1Z" />
              <path fill="url(#m)" d="M48.03 22.79h3.983v15.675H48.03V22.79Z" />
              <path fill="url(#n)" d="M63.964 22.79h3.983v15.675h-3.983V22.79Z" />
              <path fill="url(#o)" d="M52.013 25.742h3.984V29h-3.984v-3.257Z" />
              <path fill="url(#p)" d="M55.997 29h3.983v3.256h-3.983V29Z" />
              <path fill="url(#q)" d="M59.98 32.256h3.984v3.257H59.98v-3.257Z" />

              <defs>
                <linearGradient id="f" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="g" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="h" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="i" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="j" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="k" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="m" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="n" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="o" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="p" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
                <linearGradient id="q" x1={2.718} x2={58.891} y1={1.111} y2={49.072} gradientUnits="userSpaceOnUse">
                  <stop offset={0.135} stopColor="#FFA7A5" />
                  <stop offset={0.825} stopColor="#C8FB7C" />
                </linearGradient>
              </defs>
            </svg>
          </OXFUNLoader>
        )}
        <div className={cx(`${prefixCls}-loading-container`, wrapperLoading && `${prefixCls}-loading-blur`)}>
          {children}
        </div>
      </Wrapper>
    );
  }
);

Loading.defaultProps = {
  opacity: 1,
  type: "NORMAL"
};

export default Loading;
