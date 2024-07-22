import * as React from "react";
import { SVGProps } from "react";
const DisconnectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10" />
  </svg>
);
export default DisconnectIcon;
