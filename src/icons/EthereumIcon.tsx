import * as React from "react";
import { SVGProps } from "react";
const EthereumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 128 128" {...props}>
    <rect width={128} height={128} fill="#627EEA" rx={64} />
    <path fill="#fff" fillOpacity={0.602} d="M63.993 24v29.573l24.99 11.169L63.993 24Z" />
    <path fill="#fff" d="M63.993 24 39 64.742l24.993-11.17V24Z" />
    <path fill="#fff" fillOpacity={0.602} d="M63.993 83.906V104L89 69.396l-25.007 14.51Z" />
    <path fill="#fff" d="M63.993 104V83.902L39 69.396 63.993 104Z" />
    <path fill="#fff" fillOpacity={0.2} d="m63.993 79.255 24.99-14.513-24.99-11.162v25.675Z" />
    <path fill="#fff" fillOpacity={0.602} d="m39 64.742 24.993 14.513V53.58L39 64.742Z" />
  </svg>
);
export default EthereumIcon;
