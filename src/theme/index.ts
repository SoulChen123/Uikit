import zIndices from "./zIndices";
import light from "./light";
import dark from "./dark";

const defaultTheme = (isDark?: boolean, prefixCls = "oxfun") => ({
  isDark,
  prefixCls,
  family: "'Roboto', sans-serif",
  system: {
    white: "#FFF",
    black: "#000",
    transparent: "transparent",
    inherit: "inherit",
    mask: isDark ? "rgba(7, 9, 16, 0.8)" : "rgba(255, 255, 255, 0.8)",
    ...(isDark ? dark : light)
  },
  zIndices
});

export type DefaultTheme = ReturnType<typeof defaultTheme>;

export default defaultTheme;
