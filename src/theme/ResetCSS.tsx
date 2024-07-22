import { Global, useTheme } from "@emotion/react";
import React from "react";

const ResetCSS = () => {
  const theme = useTheme();

  return (
    <Global
      styles={`
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
      }
      article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section, title {
          display: block;
      }
     
      ol, ul {
          list-style: none;
      }
      blockquote, q {
          quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
          content: '';
          content: none;
      }
      table {
          border-collapse: collapse;
          border-spacing: 0;
      }

      body {
        line-height: 1.5;
      }

      html, body {
        background: ${theme.system.blueGray[2]};
        font-family: 'Roboto', sans-serif;
        color: ${theme.system.gray[9]};
        min-height:100vh;
        height: auto;
        font-size: 14px;
        -webkit-tap-highlight-color: transparent;
      }

      a {
        text-decoration: none;
      }

      * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
      }

      input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        margin: 0; 
      }
      input[type=number] {
        -webkit-appearance: textfield;
      }
      input[type=password]:not(:placeholder-shown) {
        font-size: 24px;
        font-family: caption;
      }
      .grecaptcha-badge{
        display: none;
      }
`}
    />
  );
};

export default ResetCSS;
