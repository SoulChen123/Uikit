import raf from "rc-util/lib/raf";
import { composeRef } from "rc-util/lib/ref";
import * as React from "react";
import { useRef } from "react";
import Tooltip from "../Tooltip/Tooltip";
import { ITooltipProps, ITooltipRef } from "../Tooltip/type";

const SliderTooltip = React.forwardRef<ITooltipRef, ITooltipProps>((props, ref) => {
  const { isOpen } = props;
  const innerRef = useRef<any>(null);

  const rafRef = useRef<number | null>(null);

  function cancelKeepAlign() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    raf.cancel(rafRef.current!);
    rafRef.current = null;
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      innerRef.current?.forceAlign();
      rafRef.current = null;
    });
  }

  React.useEffect(() => {
    if (isOpen) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [isOpen, props.overlay]);

  return <Tooltip ref={composeRef(innerRef, ref)} {...props} />;
});

export default SliderTooltip;
