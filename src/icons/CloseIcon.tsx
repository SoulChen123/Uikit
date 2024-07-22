import * as React from "react";
import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M283.085 283.085c13.312-13.312 34.918-13.312 48.23 0L512 463.718l180.685-180.633a34.15 34.15 0 1 1 48.23 48.23L560.282 512l180.633 180.685a34.15 34.15 0 0 1-48.23 48.23L512 560.282 331.315 740.864a34.15 34.15 0 1 1-48.23-48.23L463.718 512 283.136 331.315a34.15 34.15 0 0 1 0-48.23z" />
  </svg>
);
export default CloseIcon;
