import { useContext } from "react";
import { Context } from "../providers/ThemeProvider";

const useThemeMode = () => useContext(Context);

export default useThemeMode;
