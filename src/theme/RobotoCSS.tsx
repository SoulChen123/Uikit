import { Global } from "@emotion/react";
import React from "react";
import { DOMAIN } from "../config";

const RobotoCSS = () => {
  return (
    <Global
      styles={`
      /* roboto-latin-100-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-100-normal.woff2) format('woff2');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* roboto-latin-300-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-300-normal.woff2) format('woff2');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* roboto-latin-400-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-400-normal.woff2) format('woff2');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* roboto-latin-500-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-500-normal.woff2) format('woff2');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* roboto-latin-700-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-700-normal.woff2) format('woff2');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* roboto-latin-900-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-900-normal.woff2) format('woff2');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* roboto-greek-100-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-100-normal.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      
      /* roboto-greek-300-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-300-normal.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      
      /* roboto-greek-400-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-400-normal.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      
      /* roboto-greek-500-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-500-normal.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      
      /* roboto-greek-700-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-700-normal.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      
      /* roboto-greek-900-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-900-normal.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      
      /* roboto-greek-ext-100-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-ext-100-normal.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      
      /* roboto-greek-ext-300-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-ext-300-normal.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      
      /* roboto-greek-ext-400-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-ext-400-normal.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      
      /* roboto-greek-ext-500-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-ext-500-normal.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      
      /* roboto-greek-ext-700-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-ext-700-normal.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      
      /* roboto-greek-ext-900-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-greek-ext-900-normal.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      
      /* roboto-latin-ext-100-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-ext-100-normal.woff2) format('woff2');
        unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;
      }
      
      /* roboto-latin-ext-300-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-ext-300-normal.woff2) format('woff2');
        unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;
      }
      
      /* roboto-latin-ext-400-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-ext-400-normal.woff2) format('woff2');
        unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;
      }
      
      /* roboto-latin-ext-500-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-ext-500-normal.woff2) format('woff2');
        unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;
      }
      
      /* roboto-latin-ext-700-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-ext-700-normal.woff2) format('woff2');
        unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;
      }
      
      /* roboto-latin-ext-900-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-latin-ext-900-normal.woff2) format('woff2');
        unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;
      }
      
      /* roboto-vietnamese-100-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-vietnamese-100-normal.woff2) format('woff2');
        unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
      }
      
      /* roboto-vietnamese-300-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-vietnamese-300-normal.woff2) format('woff2');
        unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
      }
      
      /* roboto-vietnamese-400-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-vietnamese-400-normal.woff2) format('woff2');
        unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
      }
      
      /* roboto-vietnamese-500-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-vietnamese-500-normal.woff2) format('woff2');
        unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
      }
      
      /* roboto-vietnamese-700-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-vietnamese-700-normal.woff2) format('woff2');
        unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
      }
      
      /* roboto-vietnamese-900-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-vietnamese-900-normal.woff2) format('woff2');
        unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
      }
      
      /* roboto-cyrillic-ext-100-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-ext-100-normal.woff2) format('woff2');
        unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
      }
      
      /* roboto-cyrillic-ext-300-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-ext-300-normal.woff2) format('woff2');
        unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
      }
      
      /* roboto-cyrillic-ext-400-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-ext-400-normal.woff2) format('woff2');
        unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
      }
      
      /* roboto-cyrillic-ext-500-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-ext-500-normal.woff2) format('woff2');
        unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
      }
      
      /* roboto-cyrillic-ext-700-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-ext-700-normal.woff2) format('woff2');
        unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
      }
      
      /* roboto-cyrillic-ext-900-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-ext-900-normal.woff2) format('woff2');
        unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
      }
      
      /* roboto-cyrillic-100-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-100-normal.woff2) format('woff2');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* roboto-cyrillic-300-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-300-normal.woff2) format('woff2');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* roboto-cyrillic-400-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-400-normal.woff2) format('woff2');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* roboto-cyrillic-500-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-500-normal.woff2) format('woff2');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* roboto-cyrillic-700-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-700-normal.woff2) format('woff2');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* roboto-cyrillic-900-normal */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url(${DOMAIN?.CDN}/static/fonts/roboto/roboto-cyrillic-900-normal.woff2) format('woff2');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      `}
    />
  );
};

export default RobotoCSS;
