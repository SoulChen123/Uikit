import { useTheme } from "@emotion/react";
import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5.333C10.109 5.333 5.333 10.11 5.333 16S10.11 26.667 16 26.667 26.667 21.89 26.667 16 21.89 5.333 16 5.333ZM2.667 16C2.667 8.636 8.637 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333Z"
        fill={theme.system.gray[9]}
      />
    </svg>
  );
};
export default SvgComponent;
