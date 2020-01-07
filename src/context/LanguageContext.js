import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [language, setLanguage] = useState("english");

  const changeLanguage = e => {
    setLanguage(e.target.value);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const withLanguage = Component => {
  return class extends React.Component {
    render() {
      return (
        <LanguageContext.Consumer>
          {value => <Component languageContext={value} {...this.props} />}
        </LanguageContext.Consumer>
      );
    }
  };
};
