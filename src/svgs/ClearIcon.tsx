import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" {...props}>
    <path d="M8 1.333c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667 6.667-3 6.667-6.667-3-6.667-6.667-6.667Zm2.467 8.2a.645.645 0 0 1 0 .934.644.644 0 0 1-.934 0L8 8.933l-1.533 1.534a.644.644 0 0 1-.934 0 .644.644 0 0 1 0-.934L7.067 8 5.533 6.467a.644.644 0 0 1 0-.934.644.644 0 0 1 .934 0L8 7.067l1.533-1.534a.644.644 0 0 1 .934 0 .645.645 0 0 1 0 .934L8.933 8l1.534 1.533Z" />
  </svg>
);

export default SvgComponent;
