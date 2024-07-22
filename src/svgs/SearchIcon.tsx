import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" {...props}>
    <path d="M8.333 3.333a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-6.666 5A6.667 6.667 0 1 1 13.6 12.421l4.49 4.49a.833.833 0 1 1-1.18 1.178l-4.489-4.49A6.667 6.667 0 0 1 1.666 8.333Z" />
  </svg>
);

export default SvgComponent;
