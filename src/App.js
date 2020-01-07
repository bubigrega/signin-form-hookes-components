import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./Navbar";
import Signin from "./Signin";
import PageContent from "./PageContent";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CssBaseline />
        <PageContent>
          <Navbar />
          <Signin />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
