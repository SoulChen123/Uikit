import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.385 9.167h2.468c.086-1.837.454-3.515 1.028-4.809.05-.113.103-.224.157-.332a6.672 6.672 0 0 0-3.653 5.14ZM10 1.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Zm0 1.666c-.19 0-.432.083-.723.36-.295.281-.6.727-.872 1.342-.468 1.053-.799 2.493-.884 4.132h4.958c-.085-1.639-.416-3.079-.883-4.132-.274-.615-.578-1.06-.873-1.342-.291-.277-.534-.36-.723-.36Zm4.147 5.834c-.086-1.837-.454-3.515-1.028-4.809a8.285 8.285 0 0 0-.157-.332 6.672 6.672 0 0 1 3.653 5.14h-2.468Zm-1.668 1.666H7.52c.085 1.64.416 3.08.884 4.132.273.615.577 1.061.872 1.342.291.277.534.36.723.36.19 0 .432-.083.723-.36.295-.281.6-.727.872-1.342.468-1.053.799-2.493.884-4.132Zm.483 5.141c.054-.108.106-.22.157-.332.574-1.293.942-2.972 1.028-4.809h2.468a6.672 6.672 0 0 1-3.653 5.141Zm-5.924 0a8.292 8.292 0 0 1-.157-.332c-.574-1.293-.942-2.972-1.028-4.809H3.385a6.672 6.672 0 0 0 3.653 5.141Z"
    />
  </svg>
);

export default SvgComponent;