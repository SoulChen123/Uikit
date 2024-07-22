import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.75 1.5a.75.75 0 0 1 .75.75V3h3v-.75a.75.75 0 0 1 1.5 0V3h2.25a1.5 1.5 0 0 1 1.5 1.5v9.75a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V4.5A1.5 1.5 0 0 1 3.75 3H6v-.75a.75.75 0 0 1 .75-.75ZM6 4.5H3.75v2.25h10.5V4.5H12v.75a.75.75 0 0 1-1.5 0V4.5h-3v.75a.75.75 0 0 1-1.5 0V4.5Zm8.25 3.75H3.75v6h10.5v-6Z" />
  </svg>
);

export default SvgComponent;
