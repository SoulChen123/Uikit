import * as React from "react";
import { SVGProps } from "react";
const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M512 170.65c-187.75 0-341.35 153.6-341.35 341.35S324.25 853.35 512 853.35 853.35 699.75 853.35 512 699.75 170.65 512 170.65zm143.36 283.34L491.52 617.83a33.024 33.024 0 0 1-47.77 0l-75.11-75.11a32.973 32.973 0 0 1 0-47.77 32.973 32.973 0 0 1 47.77 0l51.2 51.2 139.98-139.98a32.973 32.973 0 0 1 47.77 0 32.973 32.973 0 0 1 0 47.82z" />
  </svg>
);
export default SuccessIcon;
