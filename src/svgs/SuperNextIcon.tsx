import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.195 3.529c.26-.26.683-.26.943 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 0 1-.943-.942L11.724 8 8.195 4.471a.667.667 0 0 1 0-.942Zm-4 0c.26-.26.683-.26.943 0l4 4a.667.667 0 0 1 0 .942l-4 4a.667.667 0 0 1-.943-.942L7.724 8 4.195 4.471a.667.667 0 0 1 0-.942Z" />
  </svg>
);

export default SvgComponent;
