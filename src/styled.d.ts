import "@emotion/react";
import { DefaultTheme } from "./theme";
declare module "@emotion/react" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface Theme extends DefaultTheme {}
}
