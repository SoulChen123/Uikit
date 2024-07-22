import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" {...props}>
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M5 1.666h10a.833.833 0 0 1 .834.833v15a.833.833 0 0 1-.834.834H5a.833.833 0 0 1-.833-.834v-15A.833.833 0 0 1 5 1.666Zm.834 1.667v13.333h8.333V3.333H5.834Z"
        clipRule="evenodd"
      />
      <path d="m10.834 9.655 1.077-1.077 1.179 1.179L10 12.846l-3.089-3.09L8.09 8.579l1.077 1.077V5.834h1.667v3.822ZM8.334 15.834h3.333v-1.667H8.334v1.667Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
