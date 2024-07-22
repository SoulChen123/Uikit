import React from "react";
import { isBrowser } from "../utils/dom";

const useSafeLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

export default useSafeLayoutEffect;
