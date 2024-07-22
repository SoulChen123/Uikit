import styled from "@emotion/styled";
import { SpinIcon } from "../../icons";
import { SPIN } from "../../theme/animations";

const Spin = styled(SpinIcon)(() => ({
  animationName: SPIN,
  animationDuration: "1.5s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite"
}));

export default Spin;
