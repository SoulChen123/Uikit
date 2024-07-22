import copy from "copy-to-clipboard";
import { useState } from "react";

const useCopyClipboard = (): [boolean, (toCopy: string, callback?: () => void) => void] => {
  const [isCopied, setIsCopied] = useState(false);

  const staticCopy = (text: string, callback?: () => void) => {
    const didCopy = copy(text);
    setIsCopied(didCopy);
    callback?.();
  };

  return [isCopied, staticCopy];
};

export default useCopyClipboard;
