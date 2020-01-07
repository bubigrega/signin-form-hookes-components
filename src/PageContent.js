import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const PageContent = props => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        minHeight: "100vh",
        minWidth: "100vw"
      }}
    >
      {props.children}
    </div>
  );
};

export default PageContent;
