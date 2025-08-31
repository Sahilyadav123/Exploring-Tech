import ThemeContext from "./theme";
import { useState } from "react";
function ThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <ThemeContext.Provider value={{ themeMode,setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
