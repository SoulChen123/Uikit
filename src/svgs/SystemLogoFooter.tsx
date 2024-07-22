import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "../hooks";

const SvgComponent = (props: SVGProps<SVGSVGElement> & { isDark?: boolean }) => {
  const { isDark } = useTheme();
  const red = isDark ? "#FFA7A5" : "#FFA4A4";
  const green = isDark ? "#C8FB7C" : "#8FCD33";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={128} height={21} fill="none" {...props}>
      <path fill="url(#a)" d="M24.546 0h4.316v8.227h-4.316V0Z" />
      <path fill="url(#b)" d="M41 0h4.316v8.227H41V0Z" />
      <path fill="url(#c)" d="M24.546 12.543h4.316v8.227h-4.316v-8.227Z" />
      <path fill="url(#d)" d="M41 12.543h4.316v8.227H41v-8.227Z" />
      <path fill="url(#e)" d="M28.862 8.227H41v4.316H28.862V8.227Z" />
      <path fill="url(#f)" d="M49.093 16.454h4.315v4.316h-4.316v-4.316Z" />
      <path fill="url(#g)" d="M4.316 0h12.138v4.316H4.316V0Z" />
      <path fill="url(#h)" d="M0 4.316h4.316v12.138H0V4.316Z" />
      <path fill="url(#i)" d="M16.454 4.316h4.316v12.138h-4.316V4.316Z" />
      <path fill="url(#j)" d="M4.316 16.454h12.138v4.316H4.316v-4.316Z" />
      <path fill="url(#k)" d="M81.875 0h4.316v16.454h-4.316V0Z" />
      <path fill="url(#l)" d="M98.329 0h4.316v16.454h-4.316V0Z" />
      <path fill="url(#m)" d="M86.19 16.454H98.33v4.316H86.19v-4.316Z" />
      <path fill="url(#n)" d="M57.328 0h4.316v20.77h-4.316V0Z" />
      <path fill="url(#o)" d="M57.328 0h20.77v4.316h-20.77V0Z" />
      <path fill="url(#p)" d="M57.328 8.362h16.454v4.316H57.328V8.362Z" />
      <path fill="url(#q)" d="M106.421 0h4.316v20.77h-4.316V0Z" />
      <path fill="url(#r)" d="M123.684 0H128v20.77h-4.316V0Z" />
      <path fill="url(#s)" d="M110.737 3.911h4.316v4.316h-4.316V3.911Z" />
      <path fill="url(#t)" d="M115.053 8.227h4.315v4.316h-4.315V8.227Z" />
      <path fill="url(#u)" d="M119.368 12.543h4.316v4.316h-4.316v-4.316Z" />
      <defs>
        <linearGradient id="a" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="b" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="c" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="d" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="e" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="f" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="g" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="h" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="i" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="j" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="k" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="l" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="m" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="n" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="o" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="p" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="q" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="r" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="s" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="t" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
        <linearGradient id="u" x1={0} x2={18.909} y1={0} y2={56.975} gradientUnits="userSpaceOnUse">
          <stop offset={0.135} stopColor={red} />
          <stop offset={0.825} stopColor={green} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SvgComponent;
