import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.529 12.471a.667.667 0 0 1 0-.942L9.057 8 5.53 4.471a.667.667 0 0 1 .942-.942l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 0 1-.942 0Z" />
  </svg>
);

export default SvgComponent;
