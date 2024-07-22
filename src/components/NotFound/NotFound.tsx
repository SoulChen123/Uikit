import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { DOMAIN } from "../../config";
import useLocalization from "../../hooks/useLocalization";
import { ChevronRightIcon } from "../../svgs";
import { ExternalLink } from "../ExternalLink";

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
    margin: 8px 0 24px;
    font-weight: 600;
    font-size: 18px;
  }
`;

const NotFound: React.FC = () => {
  const theme = useTheme();
  const { t } = useLocalization();

  return (
    <Wrapper>
      <Container>
        <svg width={361} height={300} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m83.5 273 31-179 40-5.5 34.5-8L280.5 273h-197Z" fill="url(#notFound)" fillOpacity={0.5} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m174.783 221.781 15.778 28.369 12.235-6.804-15.935-28.652 16.185-9.495-7.085-12.075-15.906 9.332-23.996-43.147-12.235 6.805 24.152 43.428-16.298 9.562-24.151-42.028-12.138 6.976 27.669 48.152 3.519 6.124 6.092-3.574 22.114-12.973ZM145.996 121.482l-6.705 14.218 7.236 3.412 6.783-14.385 8.13 3.607 3.244-7.312-7.961-3.533 10.31-21.864-7.236-3.412-10.388 22.031-7.763-3.445 8.343-18.824-7.313-3.242-9.964 22.48-1.621 3.656 3.655 1.621 11.25 4.992Z"
            fill={theme.system.gray[9]}
          />
          <ellipse
            cx={147.546}
            cy={68.637}
            rx={80}
            ry={21.333}
            transform="rotate(-10 147.546 68.637)"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
          />
          <path
            d="m68.762 82.53 48.583-8.567M130.476 71.646l10.505-1.853M154.111 67.479l10.505-1.852M177.747 63.311l48.583-8.566M175.355 42.071c-3.069-17.404-19.666-29.026-37.07-25.957-17.405 3.069-29.026 19.666-25.957 37.07"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
          />
          <circle
            cx={123.911}
            cy={72.803}
            r={6.667}
            transform="rotate(-10 123.911 72.803)"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
          />
          <circle
            cx={147.546}
            cy={68.637}
            r={6.667}
            transform="rotate(-10 147.546 68.637)"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
          />
          <circle
            cx={171.181}
            cy={64.47}
            r={6.667}
            transform="rotate(-10 171.181 64.47)"
            stroke={theme.system.gray[9]}
            strokeWidth={4}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M208.297 127.688c-2.778 2.251-5.309 6.175-6.978 11.269-1.554 4.742-1.426 9.345-.184 12.889 1.24 3.538 3.456 5.76 6.032 6.604 3.301 1.082 6.356.468 9.117-1.53 2.887-2.088 5.516-5.778 7.135-10.72 1.621-4.946 1.719-9.582.566-13.112-1.098-3.359-3.357-5.898-7.164-7.145-3.144-1.031-5.92-.366-8.524 1.745ZM202 119.92c4.885-3.96 11.148-5.705 17.936-3.48 7.028 2.304 11.532 7.353 13.554 13.542 1.967 6.019 1.543 12.89-.568 19.333-2.114 6.448-5.799 12.108-10.777 15.708-5.102 3.691-11.461 5.103-18.092 2.93-6.151-2.016-10.322-6.999-12.355-12.8-2.031-5.795-2.061-12.663.118-19.31 2.063-6.296 5.472-12.104 10.184-15.923Z"
            fill={theme.system.gray[9]}
          />
          <ellipse cx={182} cy={273} rx={98.5} ry={14} fill={theme.system.blueGray[3]} />
          <ellipse cx={181.5} cy={273} rx={46} ry={3} fill={theme.system.blueGray[5]} />
          <defs>
            <linearGradient id="notFound" x1={182} y1={80.5} x2={182} y2={273} gradientUnits="userSpaceOnUse">
              <stop stopColor="#B2BACB" />
              <stop offset={1} stopColor="#DCDFE5" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>

        <Content>
          <h1>{t("Oops!")}</h1>
          <p>{t("The page you were looking for was not found.")}</p>
          <ExternalLink colorScheme="primary" href={DOMAIN?.UI}>
            {t("Go to homepage")} <ChevronRightIcon />
          </ExternalLink>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default NotFound;
