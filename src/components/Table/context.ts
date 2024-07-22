import { createContext, useContext } from "react";
import { ITableContext } from "./type";

export const Context = createContext<ITableContext<any>>({
  rowKey: ""
});

export const TableProvider = Context.Provider;

export const useTable = () => useContext(Context);
