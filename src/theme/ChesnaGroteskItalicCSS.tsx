import { Global } from "@emotion/react";
import React from "react";
import { DOMAIN } from "../config";

const ChesnaGroteskItalicCSS = () => {
  return (
    <Global
      styles={`
        /* 300 */
        @font-face {
          font-family: "Chesna Grotesk";
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-300-italic.woff2") format("woff2"),
            url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-300-italic.woff") format("woff");
        }

        /* 400 */
        @font-face {
          font-family: "Chesna Grotesk";
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-400-italic.woff2") format("woff2"),
            url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-400-italic.woff") format("woff");
        }

        /* 500 */
        @font-face {
          font-family: "Chesna Grotesk";
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-500-italic.woff2") format("woff2"),
            url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-500-italic.woff") format("woff");
        }

        /* 600 */
        @font-face {
          font-family: "Chesna Grotesk";
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-600-italic.woff2") format("woff2"),
            url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-600-italic.woff") format("woff");
        }

        /* 700 */
        @font-face {
          font-family: "Chesna Grotesk";
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-700-italic.woff2") format("woff2"),
            url("${DOMAIN?.CDN}/static/fonts/chesna-grotesk/chesna-grotesk-700-italic.woff") format("woff");
        }
      `}
    />
  );
};

export default ChesnaGroteskItalicCSS;
