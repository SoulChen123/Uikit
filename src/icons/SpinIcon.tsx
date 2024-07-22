import * as React from "react";
import { SVGProps } from "react";

const SpinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    {...props}
  >
    <path d="M512 213.35a298.65 298.65 0 1 0 0 597.3 42.65 42.65 0 0 1 0 85.35 384 384 0 1 1 384-384 42.65 42.65 0 0 1-85.35 0A298.65 298.65 0 0 0 512 213.35z" />
  </svg>
);
export default SpinIcon;
