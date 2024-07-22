import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "../../hooks";
const NO_DATA = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={88} height={88} fill="none" {...props}>
      <path
        fill={theme.system.blueGray[6]}
        fillRule="evenodd"
        d="M22 4a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h44a8 8 0 0 0 8-8V19L59 4H22Zm6.5 24a2.5 2.5 0 0 0 0 5h31a2.5 2.5 0 0 0 0-5h-31Zm0 11a2.5 2.5 0 0 0 0 5h31a2.5 2.5 0 0 0 0-5h-31ZM26 52.5a2.5 2.5 0 0 1 2.5-2.5h31a2.5 2.5 0 0 1 0 5h-31a2.5 2.5 0 0 1-2.5-2.5Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill={theme.system.blueGray[6]}
        fillRule="evenodd"
        d="M73 55c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-1.007 13.236A15.926 15.926 0 0 1 63 71c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16c0 3.334-1.02 6.43-2.764 8.993l8.385 8.386a3 3 0 1 1-4.242 4.242l-8.386-8.385Z"
        clipRule="evenodd"
      />
      <path fill={theme.system.blueGray[6]} d="m59 4 15 15h-7a8 8 0 0 1-8-8V4Z" opacity={0.6} />
      <path
        fill={theme.system.blueGray[6]}
        fillRule="evenodd"
        d="M4 20a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2H6v-1a1 1 0 1 0-2 0v1H3a1 1 0 1 0 0 2h1v1ZM29 75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
        opacity={0.6}
      />
      <circle cx={79} cy={28} r={2} fill={theme.system.blueGray[6]} opacity={0.6} />
    </svg>
  );
};
export default NO_DATA;
