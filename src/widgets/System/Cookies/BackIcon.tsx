import * as React from "react";
import { SVGProps } from "react";
const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M17.707 6.293a1 1 0 0 1 0 1.414L11.414 14l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default BackIcon;
