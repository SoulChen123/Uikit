import { Global, useTheme } from "@emotion/react";
import React from "react";
import { encodeSVGUrl } from "../utils";

const ToastCSS = () => {
  const theme = useTheme();

  return (
    <Global
      styles={`
      :root {
        --toastify-color-light: #fff;
        --toastify-color-dark: #121212;
        --toastify-color-info: ${theme.system.primary[5]};
        --toastify-color-success: ${theme.system.green[5]};
        --toastify-color-warning: ${theme.system.yellow[5]};
        --toastify-color-error: ${theme.system.red[5]};
        --toastify-color-transparent: rgba(255, 255, 255, 0.7);
        --toastify-icon-color-info: var(--toastify-color-info);
        --toastify-icon-color-success: var(--toastify-color-success);
        --toastify-icon-color-warning: var(--toastify-color-warning);
        --toastify-icon-color-error: var(--toastify-color-error);
        --toastify-toast-width: auto;
        --toastify-toast-background: #fff;
        --toastify-toast-min-height: 0;
        --toastify-toast-max-height: 800px;
        --toastify-font-family: inherit;
        --toastify-z-index: 9999;
        --toastify-text-color-light: #757575;
        --toastify-text-color-dark: #fff;
        --toastify-text-color-info: #fff;
        --toastify-text-color-success: #fff;
        --toastify-text-color-warning: #fff;
        --toastify-text-color-error: #fff;
        --toastify-spinner-color: #616161;
        --toastify-spinner-color-empty-area: #e0e0e0;
        --toastify-color-progress-light: ${theme.system.primary[5]};
        --toastify-color-progress-dark: ${theme.system.primary[5]};
        --toastify-color-progress-info: var(--toastify-color-info);
        --toastify-color-progress-success: var(--toastify-color-success);
        --toastify-color-progress-warning: var(--toastify-color-warning);
        --toastify-color-progress-error: var(--toastify-color-error);
      }
      
      .Toastify__toast-container {
        z-index: var(--toastify-z-index);
        -webkit-transform: translate3d(0, 0, var(--toastify-z-index) px);
        position: fixed;
        padding: 4px;
        width: var(--toastify-toast-width);
        box-sizing: border-box;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 1em;
      }
      .Toastify__toast-container--top-left {
        top: 1em;
        left: 1em;
      }
      .Toastify__toast-container--top-center {
        top: 1em;
        left: 50%;
        transform: translateX(-50%);
      }
      .Toastify__toast-container--top-right {
        top: 1em;
        right: 1em;
      }
      .Toastify__toast-container--bottom-left {
        bottom: 1em;
        left: 1em;
      }
      .Toastify__toast-container--bottom-center {
        bottom: 1em;
        left: 50%;
        transform: translateX(-50%);
      }
      .Toastify__toast-container--bottom-right {
        bottom: 1em;
        right: 1em;
      }
      
      @media only screen and (max-width : 480px) {
        .Toastify__toast-container {
          width: 100vw;
          padding: 0;
          left: 0;
          margin: 0;
        }
        .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {
          top: 0;
          transform: translateX(0);
        }
        .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {
          bottom: 0;
          transform: translateX(0);
        }
        .Toastify__toast-container--rtl {
          right: 0;
          left: initial;
        }
      }
      .Toastify__toast {
        position: relative;
        min-height: var(--toastify-toast-min-height);
        box-sizing: border-box;
        margin-bottom: 1rem;
        padding: 8px;
        // border-radius: 4px;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
            justify-content: space-between;
        max-height: var(--toastify-toast-max-height);
        overflow: hidden;
        font-family: var(--toastify-font-family);
        cursor: pointer;
        direction: ltr;
      }
      .Toastify__toast--rtl {
        direction: rtl;
      }
      .Toastify__toast-body {
        margin: auto 0;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
        padding: 6px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
            align-items: center;
      }
      .Toastify__toast-body > div:last-child {
        -ms-flex: 1;
            flex: 1;
      }
      .Toastify__toast-icon {
        -webkit-margin-end: 10px;
                margin-inline-end: 10px;
        width: 20px;
        -ms-flex-negative: 0;
            flex-shrink: 0;
        display: -ms-flexbox;
        display: flex;
        width: 20px;
        height: 20px;
        margin-inline-end:0;
        margin-right: 8px;
        animation: none;
        ::after {
          content: "";
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center center
        }
      }
      
      .Toastify--animate {
        animation-fill-mode: both;
        animation-duration: 0.7s;
      }
      
      .Toastify--animate-icon {
        animation-fill-mode: both;
        animation-duration: 0.3s;
      }
      
      @media only screen and (max-width : 480px) {
        .Toastify__toast {
          margin-bottom: 0;
          border-radius: 0;
        }
      }
      .Toastify__toast-theme--dark {
        background: var(--toastify-color-dark);
        color: var(--toastify-text-color-dark);
      }
      .Toastify__toast-theme--light {
        background: var(--toastify-color-light);
        color: var(--toastify-text-color-light);
      }
      .Toastify__toast-theme--colored.Toastify__toast--default {
        background: var(--toastify-color-light);
        color: var(--toastify-text-color-light);
      }
      .Toastify__toast-theme--colored.Toastify__toast--info {
        color: var(--toastify-text-color-info);
        background: var(--toastify-color-info);
      }
      .Toastify__toast-theme--colored.Toastify__toast--success {
        color: var(--toastify-text-color-success);
        background: var(--toastify-color-success);
      }
      .Toastify__toast-theme--colored.Toastify__toast--warning {
        color: var(--toastify-text-color-warning);
        background: var(--toastify-color-warning);
      }
      .Toastify__toast-theme--colored.Toastify__toast--error {
        color: var(--toastify-text-color-error);
        background: var(--toastify-color-error);
      }
      
      .Toastify__progress-bar-theme--light {
        background: var(--toastify-color-progress-light);
      }
      .Toastify__progress-bar-theme--dark {
        background: var(--toastify-color-progress-dark);
      }
      .Toastify__progress-bar--info {
        background: var(--toastify-color-progress-info);
      }
      .Toastify__progress-bar--success {
        background: var(--toastify-color-progress-success);
      }
      .Toastify__progress-bar--warning {
        background: var(--toastify-color-progress-warning);
      }
      .Toastify__progress-bar--error {
        background: var(--toastify-color-progress-error);
      }
      .Toastify__progress-bar-theme--colored.Toastify__progress-bar--info, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
        background: var(--toastify-color-transparent);
      }
      

      
      @keyframes Toastify__trackProgress {
        0% {
          transform: scaleX(1);
        }
        100% {
          transform: scaleX(0);
        }
      }
      .Toastify__progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        z-index: var(--toastify-z-index);
        opacity: 0.7;
        transform-origin: left;
      }
      .Toastify__progress-bar--animated {
        animation: Toastify__trackProgress linear 1 forwards;
      }
      .Toastify__progress-bar--controlled {
        transition: transform 0.2s;
      }
      .Toastify__progress-bar--rtl {
        right: 0;
        left: initial;
        transform-origin: right;
      }
      
      .Toastify__spinner {
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        border: 2px solid;
        border-radius: 100%;
        border-color: var(--toastify-spinner-color-empty-area);
        border-right-color: var(--toastify-spinner-color);
        animation: Toastify__spin 0.65s linear infinite;
      }
      
      @keyframes Toastify__bounceInRight {
        from, 60%, 75%, 90%, to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        from {
          opacity: 0;
          transform: translate3d(3000px, 0, 0);
        }
        60% {
          opacity: 1;
          transform: translate3d(-25px, 0, 0);
        }
        75% {
          transform: translate3d(10px, 0, 0);
        }
        90% {
          transform: translate3d(-5px, 0, 0);
        }
        to {
          transform: none;
        }
      }
      @keyframes Toastify__bounceOutRight {
        20% {
          opacity: 1;
          transform: translate3d(-20px, 0, 0);
        }
        to {
          opacity: 0;
          transform: translate3d(2000px, 0, 0);
        }
      }
      @keyframes Toastify__bounceInLeft {
        from, 60%, 75%, 90%, to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        0% {
          opacity: 0;
          transform: translate3d(-3000px, 0, 0);
        }
        60% {
          opacity: 1;
          transform: translate3d(25px, 0, 0);
        }
        75% {
          transform: translate3d(-10px, 0, 0);
        }
        90% {
          transform: translate3d(5px, 0, 0);
        }
        to {
          transform: none;
        }
      }
      @keyframes Toastify__bounceOutLeft {
        20% {
          opacity: 1;
          transform: translate3d(20px, 0, 0);
        }
        to {
          opacity: 0;
          transform: translate3d(-2000px, 0, 0);
        }
      }
      @keyframes Toastify__bounceInUp {
        from, 60%, 75%, 90%, to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        from {
          opacity: 0;
          transform: translate3d(0, 3000px, 0);
        }
        60% {
          opacity: 1;
          transform: translate3d(0, -20px, 0);
        }
        75% {
          transform: translate3d(0, 10px, 0);
        }
        90% {
          transform: translate3d(0, -5px, 0);
        }
        to {
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes Toastify__bounceOutUp {
        20% {
          transform: translate3d(0, -10px, 0);
        }
        40%, 45% {
          opacity: 1;
          transform: translate3d(0, 20px, 0);
        }
        to {
          opacity: 0;
          transform: translate3d(0, -2000px, 0);
        }
      }
      @keyframes Toastify__bounceInDown {
        from, 60%, 75%, 90%, to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        0% {
          opacity: 0;
          transform: translate3d(0, -3000px, 0);
        }
        60% {
          opacity: 1;
          transform: translate3d(0, 25px, 0);
        }
        75% {
          transform: translate3d(0, -10px, 0);
        }
        90% {
          transform: translate3d(0, 5px, 0);
        }
        to {
          transform: none;
        }
      }
      @keyframes Toastify__bounceOutDown {
        20% {
          transform: translate3d(0, 10px, 0);
        }
        40%, 45% {
          opacity: 1;
          transform: translate3d(0, -20px, 0);
        }
        to {
          opacity: 0;
          transform: translate3d(0, 2000px, 0);
        }
      }
      .Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {
        animation-name: Toastify__bounceInLeft;
      }
      .Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {
        animation-name: Toastify__bounceInRight;
      }
      .Toastify__bounce-enter--top-center {
        animation-name: Toastify__bounceInDown;
      }
      .Toastify__bounce-enter--bottom-center {
        animation-name: Toastify__bounceInUp;
      }
      
      .Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {
        animation-name: Toastify__bounceOutLeft;
      }
      .Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {
        animation-name: Toastify__bounceOutRight;
      }
      .Toastify__bounce-exit--top-center {
        animation-name: Toastify__bounceOutUp;
      }
      .Toastify__bounce-exit--bottom-center {
        animation-name: Toastify__bounceOutDown;
      }
      
      @keyframes Toastify__zoomIn {
        from {
          opacity: 0;
          transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
          opacity: 1;
        }
      }
      @keyframes Toastify__zoomOut {
        from {
          opacity: 1;
        }
        50% {
          opacity: 0;
          transform: scale3d(0.3, 0.3, 0.3);
        }
        to {
          opacity: 0;
        }
      }
      .Toastify__zoom-enter {
        animation-name: Toastify__zoomIn;
      }
      
      .Toastify__zoom-exit {
        animation-name: Toastify__zoomOut;
      }
      
      @keyframes Toastify__flipIn {
        from {
          transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          animation-timing-function: ease-in;
        }
        60% {
          transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
          opacity: 1;
        }
        80% {
          transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }
        to {
          transform: perspective(400px);
        }
      }
      @keyframes Toastify__flipOut {
        from {
          transform: perspective(400px);
        }
        30% {
          transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          opacity: 1;
        }
        to {
          transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          opacity: 0;
        }
      }
      .Toastify__flip-enter {
        animation-name: Toastify__flipIn;
      }
      
      .Toastify__flip-exit {
        animation-name: Toastify__flipOut;
      }
      
      @keyframes Toastify__slideInRight {
        from {
          transform: translate3d(110%, 0, 0);
          visibility: visible;
        }
        to {
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes Toastify__slideInLeft {
        from {
          transform: translate3d(-110%, 0, 0);
          visibility: visible;
        }
        to {
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes Toastify__slideInUp {
        from {
          transform: translate3d(0, 110%, 0);
          visibility: visible;
        }
        to {
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes Toastify__slideInDown {
        from {
          transform: translate3d(0, -110%, 0);
          visibility: visible;
        }
        to {
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes Toastify__slideOutRight {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          visibility: hidden;
          transform: translate3d(110%, 0, 0);
        }
      }
      @keyframes Toastify__slideOutLeft {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          visibility: hidden;
          transform: translate3d(-110%, 0, 0);
        }
      }
      @keyframes Toastify__slideOutDown {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          visibility: hidden;
          transform: translate3d(0, 500px, 0);
        }
      }
      @keyframes Toastify__slideOutUp {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          visibility: hidden;
          transform: translate3d(0, -500px, 0);
        }
      }
      .Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {
        animation-name: Toastify__slideInLeft;
      }
      .Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {
        animation-name: Toastify__slideInRight;
      }
      .Toastify__slide-enter--top-center {
        animation-name: Toastify__slideInDown;
      }
      .Toastify__slide-enter--bottom-center {
        animation-name: Toastify__slideInUp;
      }
      
      .Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {
        animation-name: Toastify__slideOutLeft;
      }
      .Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {
        animation-name: Toastify__slideOutRight;
      }
      .Toastify__slide-exit--top-center {
        animation-name: Toastify__slideOutUp;
      }
      .Toastify__slide-exit--bottom-center {
        animation-name: Toastify__slideOutDown;
      }
      
      @keyframes Toastify__spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      // changed


      .Toastify__toast--success {
        background: ${theme.system.green[5]};

        .Toastify__toast-icon{
          ::after {
            background-image: url('${encodeSVGUrl(
              `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1.66667C5.41666 1.66667 1.66666 5.41667 1.66666 10C1.66666 14.5833 5.41666 18.3333 10 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 10C18.3333 5.41667 14.5833 1.66667 10 1.66667ZM13.5 8.58333L9.5 12.5833C9.16666 12.9167 8.66666 12.9167 8.33333 12.5833L6.5 10.75C6.16666 10.4167 6.16666 9.91667 6.5 9.58333C6.83333 9.25 7.33333 9.25 7.66666 9.58333L8.91666 10.8333L12.3333 7.41667C12.6667 7.08333 13.1667 7.08333 13.5 7.41667C13.8333 7.75 13.8333 8.25 13.5 8.58333Z" fill="${theme.system.black}"/>
              </svg>`
            )}');
          }
        }
      }
      
      

      .Toastify__toast--error {
        background: ${theme.system.red[5]};

        .Toastify__toast-icon{
          ::after {
            background-image: url('${encodeSVGUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1.66667C5.41666 1.66667 1.66666 5.41667 1.66666 10C1.66666 14.5833 5.41666 18.3333 10 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 10C18.3333 5.41667 14.5833 1.66667 10 1.66667ZM13.0833 11.9167C13.4167 12.25 13.4167 12.75 13.0833 13.0833C12.75 13.4167 12.25 13.4167 11.9167 13.0833L10 11.1667L8.08333 13.0833C7.75 13.4167 7.25 13.4167 6.91666 13.0833C6.58333 12.75 6.58333 12.25 6.91666 11.9167L8.83333 10L6.91666 8.08334C6.58333 7.75001 6.58333 7.25001 6.91666 6.91667C7.25 6.58334 7.75 6.58334 8.08333 6.91667L10 8.83334L11.9167 6.91667C12.25 6.58334 12.75 6.58334 13.0833 6.91667C13.4167 7.25001 13.4167 7.75001 13.0833 8.08334L11.1667 10L13.0833 11.9167Z" fill="${theme.system.black}"/>
            </svg>`)}');        
               
          }
        }
      }

      .Toastify__toast--info {
        background: ${theme.system.primary[5]};

        .Toastify__toast-icon{
          ::after {
            background-image: url('${encodeSVGUrl(
              `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39762 1.66667 1.66666 5.39763 1.66666 10C1.66666 14.6024 5.39762 18.3333 10 18.3333ZM11.0417 10C11.0417 9.4247 10.5753 8.95833 10 8.95833C9.4247 8.95833 8.95833 9.4247 8.95833 10V13.3333C8.95833 13.9086 9.4247 14.375 10 14.375C10.5753 14.375 11.0417 13.9086 11.0417 13.3333V10ZM8.95833 6.875C8.95833 6.2997 9.4247 5.83333 10 5.83333C10.5753 5.83333 11.0417 6.2997 11.0417 6.875C11.0417 7.4503 10.5753 7.91667 10 7.91667C9.4247 7.91667 8.95833 7.4503 8.95833 6.875Z" fill="${theme.system.black}"/>
              </svg>`
            )}');        
          }
        }
      }

      .Toastify__toast--warning {
        background: ${theme.system.yellow[5]};

        .Toastify__toast-icon{
          ::after {
              background-image: url('${encodeSVGUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39762 1.66667 1.66666 5.39763 1.66666 10C1.66666 14.6024 5.39762 18.3333 10 18.3333ZM11.0417 10C11.0417 9.4247 10.5753 8.95833 10 8.95833C9.4247 8.95833 8.95833 9.4247 8.95833 10V13.3333C8.95833 13.9086 9.4247 14.375 10 14.375C10.5753 14.375 11.0417 13.9086 11.0417 13.3333V10ZM8.95833 6.875C8.95833 6.2997 9.4247 5.83333 10 5.83333C10.5753 5.83333 11.0417 6.2997 11.0417 6.875C11.0417 7.4503 10.5753 7.91667 10 7.91667C9.4247 7.91667 8.95833 7.4503 8.95833 6.875Z" fill="${theme.system.black}"/>
              </svg>`)}');   
          }
        }
      }

      .Toastify__toast--default {
        background: ${theme.system.blueGray[3]};
        
        .${theme.prefixCls}-message-content, .${theme.prefixCls}-notification-body, .Toastify__close-button{
          color: ${theme.system.gray[9]};
        }

        .Toastify__toast-icon{
          animation-name: Toastify__spin;
          animation-duration: 0.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          
        ::after {
          background-image: url('${encodeSVGUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.16667C6.77834 4.16667 4.16667 6.77834 4.16667 10C4.16667 13.2217 6.77834 15.8333 10 15.8333C10.4602 15.8333 10.8333 16.2064 10.8333 16.6667C10.8333 17.1269 10.4602 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 10.4602 17.1269 10.8333 16.6667 10.8333C16.2064 10.8333 15.8333 10.4602 15.8333 10C15.8333 6.77834 13.2217 4.16667 10 4.16667Z" fill="${theme.system.gray[9]}"/>
          </svg>`)}');
        }
      }
      }

      .Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right {
        top: 80px;
        @media only screen and (max-width: 480px) {
          top: 1em;
        }
      }

      .Toastify__close-button{
        padding: 2px 0;
        display: inline-flex;
        align-items: center;
        color: ${theme.system.black};
        font-size: 16px;
        align-self: flex-start;
        :hover {
          opacity: 0.7;
        }
      }

      .Toastify__toast-container--top-left, .Toastify__toast-container--bottom-left{
        align-items: flex-start;
      }

      .Toastify__toast-container--top-center, .Toastify__toast-container--bottom-center{
        align-items: center;
      }

      .Toastify__toast-container--top-right, .Toastify__toast-container--bottom-right{
        align-items: flex-end;
      }
`}
    />
  );
};

export default ToastCSS;
