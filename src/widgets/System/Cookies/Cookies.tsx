import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { ExternalLink } from "../../../components/ExternalLink";
import { Button } from "../../../components/Button";
import { useLocalStorageState, useSetState } from "ahooks";
import BackIcon from "./BackIcon";
import { Checkbox } from "../../../components/Checkbox";
import ChevronDown from "./ChevronDown";
import useLocalization from "../../../hooks/useLocalization";

const Wrapper = styled(Modal)`
  .oxfun-modal-container {
    width: 480px;
    height: auto;
    max-height: 668px;
    padding: 0;
    left: unset;
    top: unset;
    right: 40px;
    bottom: 40px;
    @media screen and (max-width: 767px) {
      right: 0;
      bottom: 0;
      width: 100%;
      height: auto;
    }
    .oxfun-modal-content {
      width: 100%;
      max-height: 668px;

      @media screen and (max-width: 767px) {
        height: auto;
      }
      .oxfun-modal-header {
        min-height: 60px;
      }
      .oxfun-modal-body {
        padding: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .oxfun-external-link {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Policy = styled.div`
  padding: 40px;
`;

const PolicyContent = styled.p`
  font-size: 16px;
`;

const Btns = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    grid-template-columns: unset;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const SettingsTitle = styled.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  width: fit-content;
  align-items: center;
  font-size: 18px;
  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.system.gray[9]};
    &:hover {
      color: ${({ theme }) => theme.system.gray[9]};
    }
  }
`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SettingsActions = styled.div`
  padding: 0 40px 40px;
  .oxfun-btn {
    width: 100%;
  }
  .oxfun-external-link {
    margin: 8px auto 16px;
    display: block;
  }
`;

const SettingsContent = styled.div`
  flex: 1;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    /* border-radius: 4px; */
    box-shadow: none;
    background-color: inherit;
  }
  ::-webkit-scrollbar-thumb {
    /* border-radius: 4px; */
    ${({ theme }) => ({
      background: theme.system.blueGray[4]
    })}
  }
  & > p:first-of-type {
    padding: 24px 40px;
    font-size: 16px;
  }

  & > p:last-of-type {
    padding: 24px 40px;
    font-size: 14px;
    color: ${({ theme }) => theme.system.gray[9]};
  }
`;

const SettingsCards = styled.ul`
  display: grid;
  gap: 8px;
  grid-auto-flow: row;
  padding: 0 40px;
`;

const Setting = styled.li`
  /* border-radius: 8px; */
  border: 1px solid ${({ theme }) => theme.system.blueGray[4]};
  cursor: pointer;
  overflow: hidden;
  :hover {
    background: ${({ theme }) => theme.system.blueGray[2]};
  }

  & > p {
    padding: 0 16px 16px 40px;
    color: ${({ theme }) => theme.system.gray[9]};
    cursor: text;
  }
  max-height: 56px;
  transition: max-height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &[data-expanded] {
    max-height: 300px;
  }

  /* data-expanded */
`;

const SettingTitle = styled.div`
  height: 56px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  .oxfun-checkbox-content {
    font-size: 16px;
  }
`;

enum COOKIES_TYPE {
  CONTENT = "CONTENT",
  SETTINGS = "SETTINGS"
}

const Cookies: React.FC = () => {
  const { t } = useLocalization();
  const [state, setState] = useLocalStorageState<string>("_accept_cookies", {
    serializer: (v) => v ?? "",
    deserializer: (v) => v
  });
  const [type, setType] = useState<COOKIES_TYPE>(COOKIES_TYPE.CONTENT);
  // const [state, setState] = useCookieState("isAcceptCookies");

  const SETTINGS = [
    {
      key: "Strictly necessary",
      title: t("Strictly necessary"),
      content: t(
        "Strictly necessary cookies help you to access the website and each of its web pages and sub domains, by enabling basic functions like cookie consent. They cannot be disabled."
      )
    },
    {
      key: "Performance",
      title: t("Performance"),
      content: t(
        "Performance cookies help us to improve the performance and functionality of our website. These cookies collect information about how visitors use our website, including which pages they visit most often and whether they receive any error messages. We use this information to make improvements to our website and to ensure that it is working effectively."
      )
    },
    {
      key: "Targeting",
      title: t("Targeting"),
      content: t(
        "Targeting cookies are used to deliver personalized content to you based on your browsing habits and interests."
      )
    },
    {
      key: "Functionality",
      title: t("Functionality"),
      content: t(
        "Functionality cookies are used to help us remember your preferences and settings, such as language preferences and other customization options."
      )
    }
  ];

  const [expand, setExpand] = useSetState<Record<string, boolean>>({
    "Strictly necessary": false,
    Performance: false,
    Targeting: false,
    Functionality: false
  });

  return (
    <Wrapper
      isOpen={state !== "y"}
      renderTitle={
        type === COOKIES_TYPE.SETTINGS ? (
          <SettingsTitle>
            <BackIcon
              onClick={() => {
                setType(COOKIES_TYPE.CONTENT);
              }}
            />
            <span>{t("Cookie Settings")}</span>
          </SettingsTitle>
        ) : null
      }
      isMaskCancel={false}
      isCancelBtn={false}
      zIndex={9999999999}
      removeScrollEnabled={false}
    >
      {type === COOKIES_TYPE.CONTENT && (
        <Policy>
          <PolicyContent>
            {t(
              "* uses essential cookies to help us keep our website safe. With your consent, we may also use non-essential cookies to improve your user experience and analyze website traffic. By clicking 'Accept', you agree to our website's cookie use as described in our "
            )}
            <ExternalLink
              colorScheme="primary"
              href="https://support.*/en/articles/8824615-cookie-policy"
              target="_blank"
            >
              {t("Cookie Policy")}
            </ExternalLink>
            .
          </PolicyContent>
          <Btns>
            <Button
              colorScheme="primary"
              variant="outlined"
              size="large"
              onClick={() => {
                setType(COOKIES_TYPE.SETTINGS);
              }}
            >
              {t("Cookies Settings")}
            </Button>
            <Button
              colorScheme="primary"
              size="large"
              onClick={() => {
                setState("y");
              }}
            >
              {t("Accept All Cookies")}
            </Button>
          </Btns>
        </Policy>
      )}
      {type === COOKIES_TYPE.SETTINGS && (
        <Settings>
          <SettingsContent>
            <p>
              {t(
                "* uses essential cookies to help us keep our website safe. With your consent, we may also use non-essential cookies to improve your user experience and analyze website traffic."
              )}
            </p>
            <SettingsCards>
              {SETTINGS.map((p) => (
                <Setting key={p.key} data-expanded={expand[p.key] ? "" : undefined}>
                  <SettingTitle
                    onClick={() => {
                      setExpand({ [p.key]: !expand[p.key] });
                    }}
                  >
                    <Checkbox disabled={p.key === "Strictly necessary"} defaultChecked={p.key === "Strictly necessary"}>
                      {p.title}
                    </Checkbox>
                    <ChevronDown />
                  </SettingTitle>
                  <p>{p.content}</p>
                </Setting>
              ))}
            </SettingsCards>
            <p>
              {t(
                "By managing your cookie preferences, you can control the types of cookies that are stored on your device when you visit our website. "
              )}
            </p>
          </SettingsContent>
          <SettingsActions>
            <ExternalLink
              colorScheme="primary"
              href="https://support.*/en/articles/8824615-cookie-policy"
              target="_blank"
            >
              {t("Cookie Policy")}
            </ExternalLink>
            <Button
              colorScheme="primary"
              size="large"
              onClick={() => {
                setState("y");
              }}
            >
              {t("Save & Close")}
            </Button>
          </SettingsActions>
        </Settings>
      )}
    </Wrapper>
  );
};

export default Cookies;
