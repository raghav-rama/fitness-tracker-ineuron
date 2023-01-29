import * as React from "react";
import axios from "axios";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Grid,
  Button,
  AppBar,
  Toolbar,
  ButtonBase,
} from "@mui/material";
import Context from "../context/landing/Context";

const Login = () => {
  const context = React.useContext(Context);
  const handleLogin = (event) => {
    event.preventDefault();
    const username = document.getElementById("login-textfield").value;
    const password = document.getElementById("password-textfield").value;
    console.log(username, password);
    axios
      .post("http://localhost:5000/api/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
          // check the response from server
          // on successfull authentication save the token, userId and other details in localstorage or context
          // redirect to home or dashboard page
      })
      .catch((error) => {
          // handle errors
      });
  };
  
  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          right: "-60%",
          top: "20%",
          padding: 3,
          width: "30%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}
            >
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="login-textfield"
              label="Username"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password-textfield"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={handleLogin}>Login</Button>
          </Grid>
          <Grid item xs={12}>
            <ButtonBase onClick={context.handleSignup}>
              <Typography variant="subtitle2" component="p" sx={{textDecoration: "1px underline solid black"}}>
                New user? Sign up
              </Typography>
            </ButtonBase>
          </Grid>          
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default Login;
