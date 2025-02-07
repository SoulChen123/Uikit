import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" {...props}>
    <g clipPath="url(#sun)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 .833c.46 0 .833.373.833.834v1.666a.833.833 0 0 1-1.666 0V1.667c0-.46.373-.834.833-.834ZM3.577 3.577a.833.833 0 0 1 1.179 0l1.178 1.179a.833.833 0 1 1-1.178 1.178L3.577 4.756a.833.833 0 0 1 0-1.179Zm12.965 0a.833.833 0 0 1 0 1.179l-1.179 1.178a.833.833 0 0 1-1.178-1.178l1.178-1.179a.833.833 0 0 1 1.179 0ZM10 6.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM.833 10c0-.46.373-.833.834-.833h1.666a.833.833 0 1 1 0 1.666H1.667A.833.833 0 0 1 .833 10Zm15 0c0-.46.373-.833.834-.833h1.666a.833.833 0 0 1 0 1.666h-1.666a.833.833 0 0 1-.834-.833Zm-9.898 4.184a.833.833 0 0 1 0 1.179L4.756 16.54a.833.833 0 0 1-1.178-1.178l1.178-1.179a.833.833 0 0 1 1.179 0Zm8.25 0a.833.833 0 0 1 1.178 0l1.178 1.179a.833.833 0 0 1-1.178 1.178l-1.179-1.178a.833.833 0 0 1 0-1.179ZM10 15.834c.46 0 .833.372.833.833v1.666a.833.833 0 1 1-1.666 0v-1.666c0-.46.373-.834.833-.834Z"
      />
    </g>
    <defs>
      <clipPath id="sun">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
