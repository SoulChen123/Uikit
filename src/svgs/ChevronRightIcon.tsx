import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" {...props}>
    <path d="M4.837 10.912a.583.583 0 0 1 0-.825L7.925 7 4.837 3.912a.583.583 0 1 1 .825-.825l3.5 3.5a.583.583 0 0 1 0 .825l-3.5 3.5a.583.583 0 0 1-.825 0Z" />
  </svg>
);

export default SvgComponent;
