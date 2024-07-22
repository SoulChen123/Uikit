import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import useLocalization from "../../hooks/useLocalization";
import { CopyIcon } from "../../icons";
import { copyText } from "../../utils";
import { Button } from "../Button";
import { IErrorTracking } from "./type";

const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.system.gray[9]};
  margin-top: 40px;
  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  p {
    font-weight: 400;
    margin-top: 12px;
    font-size: 18px;
    display: flex;
    align-items: center;
    svg {
      margin-left: 8px;
      font-size: 20px;
      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.system.primary[6]};
      }
    }
  }
  button {
    margin-top: 32px;
  }
`;

const ErrorTracking: React.FC<IErrorTracking> = ({ trackingId }) => {
  const theme = useTheme();
  const { t } = useLocalization();
  return (
    <Wrapper>
      <Container>
        <svg width={361} height={300} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill={theme.system.gray[9]} d="m241.314 140.454 40.017 26.507-13.253 20.008-40.017-26.506z" />
          <path
            d="m121.732 82.836 21.677 14.358-11.088 2.251 2.252 11.088-21.676-14.358 8.835-13.34Z"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <path
            d="m159.527 128.708 16.664 11.038a8 8 0 0 1 2.251 11.087 8 8 0 0 1-11.087 2.252l-21.249-14.075 13.421-10.302Z"
            fill={theme.isDark ? theme.system.blueGray[4] : theme.system.blueGray[3]}
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <path
            d="m113.877 206.085 26.557-40.093L195.55 202.5"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <circle
            cx={194.068}
            cy={158.337}
            r={8}
            transform="rotate(33.52 194.068 158.337)"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <circle
            cx={101.949}
            cy={145.299}
            r={8}
            transform="rotate(33.52 101.949 145.299)"
            fill={theme.isDark ? theme.system.blueGray[4] : theme.system.blueGray[3]}
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <path
            d="m125.598 77-24.85 37.516"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M85 208.154c-19.163-29.19-20.304-68.183.2-99.138.457-.691.923-1.373 1.395-2.046l41.167 27.268c-.116 7.72 3.238 25.534 17.577 35.032l31.264 20.709-9.619 14.521"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <path
            d="m166.885 203.904 9.388-14.173-31.264-20.708c-7.226-4.787-11.663-11.686-14.271-18.34l35.771-27.31a12 12 0 0 1 13.908-.466l50.405 33.387-29.322 44.268"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <circle cx={142.415} cy={179.3} r={2} transform="rotate(33.52 142.415 179.3)" fill={theme.system.gray[9]} />
          <circle
            cx={136.893}
            cy={187.637}
            r={2}
            transform="rotate(33.52 136.893 187.637)"
            fill={theme.system.gray[9]}
          />
          <circle
            cx={131.371}
            cy={195.974}
            r={2}
            transform="rotate(33.52 131.371 195.974)"
            fill={theme.system.gray[9]}
          />
          <path
            d="M40.393 204.753c6.66-.172 6.814 5.826 13.482 5.653 6.668-.172 6.505-6.17 13.173-6.342 6.668-.172 6.814 5.826 13.483 5.654 6.668-.173 6.504-6.17 13.172-6.343 6.668-.172 6.815 5.826 13.483 5.654 6.668-.173 6.504-6.17 13.173-6.343 6.668-.172 6.814 5.826 13.482 5.654 6.668-.172 6.505-6.17 13.173-6.343 6.668-.172 6.814 5.826 13.483 5.654 6.668-.172 6.504-6.17 13.164-6.342 6.659-.172 6.823 5.825 13.482 5.653 6.66-.172 6.513-6.17 13.182-6.342 6.668-.173 6.814 5.826 13.482 5.653 6.668-.172 6.505-6.17 13.173-6.342 6.668-.172 6.814 5.826 13.482 5.653 6.669-.172 6.514-6.17 13.173-6.342 6.66-.172 6.823 5.826 13.483 5.654 6.659-.173 6.513-6.171 13.181-6.343 6.668-.172 6.823 5.826 13.483 5.653 6.659-.172 6.513-6.17 13.181-6.342 6.668-.172 6.823 5.826 13.491 5.653M155.5 231.788c6.66-.172 6.815 5.826 13.483 5.654 6.668-.173 6.504-6.17 13.172-6.343 6.668-.172 6.815 5.826 13.483 5.654 6.668-.173 6.505-6.17 13.173-6.343 6.668-.172 6.814 5.826 13.482 5.654 6.668-.172 6.505-6.17 13.173-6.343m40.138 4.965c6.668-.172 6.505-6.17 13.164-6.342 6.66-.172 6.823 5.826 13.483 5.654M75.655 260.686c6.668-.172 6.505-6.17 13.173-6.342 6.668-.172 6.814 5.826 13.482 5.654"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="m218.495 164.921-1.105 1.668 1.105-1.668Zm3.38 4.881 1.667 1.104a2.002 2.002 0 0 0 .282-1.551l-1.949.447Zm-14.468-2.629-1.667-1.104 1.667 1.104Zm2.252 11.087-1.104 1.668 1.104-1.668Zm5.813 1.208.349 1.97a2.003 2.003 0 0 0 1.318-.865l-1.667-1.105Zm1.918-12.879a5.97 5.97 0 0 1 2.535 3.66l3.899-.894a9.972 9.972 0 0 0-4.225-6.101l-2.209 3.335Zm-8.315 1.688a6 6 0 0 1 8.315-1.688l2.209-3.335c-4.604-3.05-10.809-1.79-13.859 2.815l3.335 2.208Zm1.689 8.316a6 6 0 0 1-1.689-8.316l-3.335-2.208c-3.05 4.604-1.79 10.809 2.815 13.859l2.209-3.335Zm4.359.906a5.973 5.973 0 0 1-4.359-.906l-2.209 3.335a9.978 9.978 0 0 0 7.266 1.51l-.698-3.939Zm2.016 3.074 6.403-9.667-3.335-2.209-6.403 9.667 3.335 2.209Z"
            fill={theme.system.gray[9]}
          />
          <path
            d="m201.5 200.561 48.65-73.447 40.017 26.507-31.092 46.94"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <circle cx={277.5} cy={62} r={32} fill={theme.isDark ? theme.system.blueGray[4] : theme.system.blueGray[3]} />
          <circle cx={297.5} cy={86} r={4} stroke={theme.system.blueGray[5]} strokeWidth={2} />
          <path
            d="M329.022 83.553c.226-1.053 1.73-1.053 1.956 0l1.98 9.221a.999.999 0 0 0 .768.768l9.221 1.98c1.053.227 1.053 1.73 0 1.956l-9.221 1.98a.999.999 0 0 0-.768.768l-1.98 9.221c-.226 1.053-1.73 1.053-1.956 0l-1.98-9.221a.999.999 0 0 0-.768-.768l-9.221-1.98c-1.053-.227-1.053-1.73 0-1.956l9.221-1.98a.999.999 0 0 0 .768-.768l1.98-9.22ZM217.522 34.553c.226-1.053 1.73-1.053 1.956 0l.654 3.047a1 1 0 0 0 .768.768l3.047.654c1.053.227 1.053 1.73 0 1.956l-3.047.654a1 1 0 0 0-.768.768l-.654 3.047c-.226 1.053-1.73 1.053-1.956 0l-.654-3.047a1 1 0 0 0-.768-.768l-3.047-.654c-1.053-.227-1.053-1.73 0-1.956l3.047-.654a1 1 0 0 0 .768-.768l.654-3.047ZM32.522 118.553c.227-1.053 1.73-1.053 1.956 0l1.008 4.694a1 1 0 0 0 .767.767l4.694 1.008c1.053.226 1.053 1.73 0 1.956l-4.694 1.008a1 1 0 0 0-.767.767l-1.008 4.694c-.227 1.053-1.73 1.053-1.956 0l-1.008-4.694a1 1 0 0 0-.767-.767l-4.694-1.008c-1.053-.226-1.053-1.73 0-1.956l4.694-1.008a1 1 0 0 0 .767-.767l1.008-4.694Z"
            fill={theme.isDark ? theme.system.blueGray[4] : theme.system.blueGray[3]}
          />
        </svg>

        <Content>
          <h1>{t("Something wrong here...!")}</h1>
          {!!trackingId && (
            <p>
              {t("Error Tracking Id:")} {trackingId}{" "}
              <CopyIcon
                onClick={() => {
                  copyText(trackingId);
                }}
              />
            </p>
          )}
          <Button
            colorScheme="primary"
            onClick={() => {
              window.location.reload();
            }}
          >
            {t("Refresh")}
          </Button>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ErrorTracking;
