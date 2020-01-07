import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [isDark, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
