import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10.471 3.529c.26.26.26.682 0 .942L6.943 8l3.528 3.529a.667.667 0 1 1-.942.942l-4-4a.667.667 0 0 1 0-.942l4-4c.26-.26.682-.26.942 0Z" />
  </svg>
);

export default SvgComponent;
