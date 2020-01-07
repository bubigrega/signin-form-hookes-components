import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { ThemeContext } from "./context/ThemeContext";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./helpers/translations";
import { validationSchema } from "./helpers/validation";

import styles from "./styles/SigninStyles";

const useStyles = makeStyles(styles);

export default function SignIn() {
  const [remember, setRemember] = useState(false);

  const classes = useStyles();

  const { register, handleSubmit, reset, errors } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    validationSchema
  });

  const { isDark } = useContext(ThemeContext);

  const { language, changeLanguage } = useContext(LanguageContext);
  const { emailAdress, password, rememberMe, signIn } = translations[language];

  const submitForm = data => {
    console.log({ ...data, remember });
    reset();
    setRemember(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {signIn}
        </Typography>
        <Select
          onChange={changeLanguage}
          value={language}
          variant="outlined"
          margin="dense"
          className={classes.select}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="slovenian">Slovenian</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
        </Select>
        <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label={emailAdress}
            name="email"
            autoComplete="email"
            autoFocus
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label={password}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            checked={remember}
            onChange={() => setRemember(!remember)}
            control={<Checkbox value={remember} color="primary" />}
            label={rememberMe}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color={isDark ? "secondary" : "primary"}
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
