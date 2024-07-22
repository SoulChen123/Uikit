import { createContext, useContext } from "react";
import { ICheckboxGroupContext } from "./type";

export const CheckboxGroupContext = createContext<ICheckboxGroupContext | undefined>(undefined);

export const CheckboxGroupProvider = CheckboxGroupContext.Provider;

export const useCheckboxGroup = () => useContext(CheckboxGroupContext);
