import { CSSProperties } from "react";

export interface CSSTextProperties {
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
  whiteSpace?: CSSProperties["whiteSpace"];
  wordBreak?: CSSProperties["wordBreak"];
}

export type ITextProps = React.HTMLAttributes<HTMLSpanElement> & CSSTextProperties;
