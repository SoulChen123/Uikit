import { keyframes } from "@emotion/react";

export const SLIDE_UP_IN = keyframes`
    from {
      transform:translateY(16px);
      transform-origin:100% 100%;
      opacity: 0;
    }
    to {
      transform:translateY(0);
      transform-origin:100% 100%;
      opacity: 1;
    }
`;

export const SLIDE_UP_OUT = keyframes`
    from {
      transform: translateY(0);
      transform-origin:100% 100%;
      opacity: 1;
    }
    to {
      transform:translateY(16px);
      transform-origin:100% 100%;
      opacity: 0;
    }
`;

export const SLIDE_DOWN_IN = keyframes`
    from {
      transform:translateY(-16px);
      transform-origin:100% 100%;
      opacity: 0;
    }
    to {
      transform:translateY(0);
      transform-origin:100% 100%;
      opacity: 1;
    }
`;

export const SLIDE_DOWN_OUT = keyframes`
    from {
      transform: translateY(0);
      transform-origin:100% 100%;
      opacity: 1;
    }
    to {
      transform:translateY(-16px);
      transform-origin:100% 100%;
      opacity: 0;
    }
`;

export const FADE_IN = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity:1;
    }
`;

export const FADE_OUT = keyframes`
    from {
      opacity:1;
    }
    to {
      opacity:0;
    }
`;

export const SKELETON_LOADING = keyframes({
  "0%": {
    transform: "translateX(-37.5%)"
  },
  "100%": {
    transform: "translateX(37.5%)"
  }
});

export const SPIN = keyframes`
   from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
`;
