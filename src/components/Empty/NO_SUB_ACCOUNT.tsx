import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "../../hooks";

const NO_SUB_ACCOUNT = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={88} height={88} fill="none" {...props}>
      <path
        fill={theme.system.blueGray[6]}
        fillRule="evenodd"
        d="M22 4a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h44a8 8 0 0 0 8-8V19L59 4H22Zm4 49.5a2.5 2.5 0 0 1 2.5-2.5h31a2.5 2.5 0 0 1 0 5h-31a2.5 2.5 0 0 1-2.5-2.5Zm0 9a2.5 2.5 0 0 1 2.5-2.5h31a2.5 2.5 0 0 1 0 5h-31a2.5 2.5 0 0 1-2.5-2.5Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill={theme.system.blueGray[6]}
        fillRule="evenodd"
        d="M39.757 20.547C38.632 21.538 38 22.882 38 24.283v3.434c0 1.401.632 2.745 1.757 3.736C40.883 32.443 42.41 33 44 33c1.591 0 3.117-.557 4.243-1.547C49.368 30.462 50 29.118 50 27.717v-3.434c0-1.401-.632-2.745-1.757-3.736C47.117 19.557 45.59 19 44 19c-1.591 0-3.117.557-4.243 1.547Zm-6.051 17.998C32.637 38.906 32 39.933 32 41.061V45a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-3.939c0-1.128-.637-2.155-1.706-2.516C52.36 37.891 48.837 37 44 37c-4.837 0-8.36.891-10.294 1.545Z"
        clipRule="evenodd"
      />
      <path fill={theme.system.blueGray[6]} d="m59 4 15 15h-7a8 8 0 0 1-8-8V4Z" opacity={0.6} />
      <path
        fill={theme.system.blueGray[6]}
        fillRule="evenodd"
        d="M29 75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2H6v-1a1 1 0 1 0-2 0v1H3a1 1 0 1 0 0 2h1v1Z"
        clipRule="evenodd"
        opacity={0.6}
      />
      <circle cx={79} cy={28} r={2} fill={theme.system.blueGray[6]} opacity={0.6} />
    </svg>
  );
};
export default NO_SUB_ACCOUNT;
