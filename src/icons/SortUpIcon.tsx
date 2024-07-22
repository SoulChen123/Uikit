import * as React from "react";
import { SVGProps } from "react";
const SortUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={8} fill="currentColor" {...props}>
    <g clipPath="url(#sortupicon)">
      <path d="m12.46 5.54-.92.92L8 2.92 4.46 6.46l-.92-.92L8 1.082l4.46 4.46Z" />
    </g>
    <defs>
      <clipPath id="sortupicon">
        <path d="M0 0h16v8H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SortUpIcon;
