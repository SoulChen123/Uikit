import * as React from "react";
import { SVGProps } from "react";
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M512 213.333A42.667 42.667 0 0 1 554.667 256v213.333H768a42.667 42.667 0 1 1 0 85.334H554.667V768a42.667 42.667 0 1 1-85.334 0V554.667H256a42.667 42.667 0 1 1 0-85.334h213.333V256A42.667 42.667 0 0 1 512 213.333z" />
  </svg>
);
export default PlusIcon;
