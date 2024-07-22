import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={72} height={72} xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <path
      d="M10.54 61.452C-3.517 47.39-3.513 24.597 10.548 10.54A36 36 0 0 1 35.997 0C55.879-.002 71.998 16.114 72 35.997A36 36 0 0 1 61.452 61.46C47.39 75.517 24.597 75.513 10.54 61.452ZM35.613 14C33.064 14.001 31 15.88 31 18.196c0 .08.003.16.008.239l1.443 22.833c.097 1.594 1.598 2.815 3.352 2.728 1.62-.081 2.912-1.256 3.001-2.728l1.444-22.833c.146-2.313-1.798-4.295-4.343-4.428a5.144 5.144 0 0 0-.292-.007Zm-.094 36a4.514 4.514 0 1 0 4.51 4.52v-.006A4.529 4.529 0 0 0 35.519 50Z"
      fillRule="nonzero"
    />
  </svg>
);

export default SvgComponent;
