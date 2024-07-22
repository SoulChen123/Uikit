import * as React from "react";
import { SVGProps } from "react";
const ErrorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M512 170.65c-187.75 0-341.35 153.6-341.35 341.35S324.25 853.35 512 853.35 853.35 699.75 853.35 512 699.75 170.65 512 170.65zm126.31 419.84a33.024 33.024 0 0 1 0 47.82 33.024 33.024 0 0 1-47.82 0L512 559.77l-78.49 78.54a33.024 33.024 0 0 1-47.82 0 33.024 33.024 0 0 1 0-47.82L464.23 512l-78.54-78.49a32.973 32.973 0 0 1 0-47.82 32.973 32.973 0 0 1 47.82 0L512 464.23l78.49-78.54a32.973 32.973 0 0 1 47.82 0 33.024 33.024 0 0 1 0 47.82L559.77 512l78.54 78.49z" />
  </svg>
);
export default ErrorIcon;
