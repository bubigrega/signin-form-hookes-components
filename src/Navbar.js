import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import Icon from "@material-ui/core/Icon";

import { ThemeContext } from "./context/ThemeContext";
import { withLanguage } from "./context/LanguageContext";
import { translations } from "./helpers/translations";

import styles from "./styles/NavbarStyles";

// const useStyles = makeStyles(theme => styles);

class Navbar extends Component {
  static contextType = ThemeContext;
  // const classes = useStyles();

  // const { isDark, toggleTheme } = useContext(ThemeContext);

  render() {
    const { classes, languageContext } = this.props;
    const { search, flag } = translations[languageContext.language];
    const { isDark, toggleTheme } = this.context;

    return (
      <AppBar position="static" color={isDark ? "default" : "primary"}>
        <Toolbar>
          <Icon className={classes.icon} color="inherit">
            <span className={classes.flag} role="img" aria-label="flag">
              <img src={flag} alt={`${languageContext.language} flag`}></img>
            </span>
          </Icon>
          <Typography className={classes.title} variant="h6" color="inherit">
            App
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withLanguage(withStyles(styles, { withTheme: true })(Navbar));
