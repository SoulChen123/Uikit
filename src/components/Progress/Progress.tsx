import React from "react";
import Line from "./Line";
import { IProgressLineProps, IProgressProps } from "./type";

const Progress: React.FC<IProgressProps & IProgressLineProps> = ({ type, ...props }) => {
  return <>{type === "line" && <Line {...props} />}</>;
};

Progress.defaultProps = {
  type: "line"
};

export default Progress;
