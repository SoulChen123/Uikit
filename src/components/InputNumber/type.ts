import { IInputItemProps } from "../InputItem/type";

export interface IInputNumberProps extends Omit<IInputItemProps, "onChange"> {
  onChange?: (e: string) => void;

  // Negative numbers allowed
  isNegativeNumber?: boolean;

  // Only isInteger
  isOnlyInteger?: boolean;

  // open up/down arrow
  controls?: boolean;
}
