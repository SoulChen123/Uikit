import { useCallback, useEffect, useState } from "react";
import { isBrowser } from "../utils/dom";

const VISIBILITY_STATE_SUPPORTED = isBrowser && "visibilityState" in document;

const isWindowVisible = () => !VISIBILITY_STATE_SUPPORTED || document.visibilityState !== "hidden";

const useIsWindowVisible = () => {
  const [focused, setFocused] = useState<boolean>(isWindowVisible());
  const emit = useCallback(() => {
    setFocused(isWindowVisible());
  }, []);

  useEffect(() => {
    if (!VISIBILITY_STATE_SUPPORTED) return undefined;

    document.addEventListener("visibilitychange", emit);
    return () => {
      document.removeEventListener("visibilitychange", emit);
    };
  }, [emit]);

  return focused;
};

export default useIsWindowVisible;
