import { IDropdownPlacement } from "./type";
import { Placement } from "@popperjs/core";

const convertDropdownPlacement: Record<IDropdownPlacement, Placement> = {
  bottom: "bottom",
  "bottom-left": "bottom-start",
  "bottom-right": "bottom-end",
  top: "top",
  "top-left": "top-start",
  "top-right": "top-end"
};

const convertPopperPlacement = Object.fromEntries(
  Object.entries(convertDropdownPlacement).map(([key, value]) => [value, key])
);

export { convertPopperPlacement, convertDropdownPlacement };
