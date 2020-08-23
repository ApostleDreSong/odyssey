import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import axios from "axios";
import ErrorHandler from "./ErrorHandler.jsx";
import Dashboard from "./Dashboard.jsx";

function LoginForm(props) {
  const [loginDetails, setLoginDetails] = useState({});
  const [error, setError] = useState();
  const [loggedIn, setloggedIn] = useState(true);

  const updateLoginDetails = (e, key) => {
    setLoginDetails({
      ...loginDetails,
      [key]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3001/api/user/login",
      data: {
        email: loginDetails.email,
      },
    })
      .then(async (res) => {
        setloggedIn(true);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <Grid container justify="center" style={{marginTop: "30px"}}>
      <Grid item>
        {!loggedIn ? (
          <form onSubmit={login}>
            Use ademesodamilare@gmail.com as login email
            <TextField
              onChange={(e) => updateLoginDetails(e, "email")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </form>
        ) : (
          <Dashboard />
        )}
        <ErrorHandler error={error} />
      </Grid>
    </Grid>
  );
}

export default LoginForm;
