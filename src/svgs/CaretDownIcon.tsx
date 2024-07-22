import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.862 5.529c.26-.26.682-.26.943 0L8 9.724l4.195-4.195a.667.667 0 1 1 .943.943l-4.667 4.666a.666.666 0 0 1-.942 0L2.862 6.472a.667.667 0 0 1 0-.943Z"
    />
  </svg>
);

export default SvgComponent;
