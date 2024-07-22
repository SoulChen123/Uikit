import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.41 2.232a.833.833 0 0 1 .209.831 6.667 6.667 0 0 0 8.318 8.318.833.833 0 0 1 1.04 1.04A8.333 8.333 0 1 1 7.58 2.024a.833.833 0 0 1 .83.208ZM6.705 4.203a6.666 6.666 0 1 0 9.092 9.092 8.333 8.333 0 0 1-9.092-9.092Z"
    />
  </svg>
);

export default SvgComponent;
