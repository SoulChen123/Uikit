import { createContext, useContext } from "react";
import { IRadioGroupContext } from "./type";

export const RadioGroupContext = createContext<IRadioGroupContext | undefined>(undefined);

export const RadioGroupProvider = RadioGroupContext.Provider;

export const useRadioGroup = () => useContext(RadioGroupContext);
