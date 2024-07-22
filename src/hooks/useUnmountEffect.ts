import * as React from "react";

const useUnmountEffect = (fn: () => void, deps: any[] = []) => {
  return React.useEffect(() => () => fn(), deps);
};

export default useUnmountEffect;
