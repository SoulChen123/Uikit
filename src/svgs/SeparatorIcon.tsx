import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.364 5.357a.75.75 0 0 1 1.03.257l2.25 3.75A.75.75 0 0 1 15 10.5H3A.75.75 0 0 1 3 9h10.675l-1.568-2.614a.75.75 0 0 1 .257-1.03Z"
    />
  </svg>
);

export default SvgComponent;
