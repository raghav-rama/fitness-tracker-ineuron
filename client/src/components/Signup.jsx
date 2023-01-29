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
import { useForm } from "react-final-form";

const Signup = () => {
  const [password, setPassword] = React.useState("");
  const [cnfPassword, setCnfPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSignup = () => {
    const full_name = document.querySelector("#signup-fullname").value;
    const username = document.querySelector("#signup-username").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#password-textfield").value;
    const confirm_password = document.querySelector(
      "#confirm-password-textfield"
    ).value;
    console.log(full_name, username, email, password, confirm_password);
    if (password !== confirm_password) {
      return;
    }

    axios
      .post("http://localhost:5000/api/signup", {
        full_name,
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  const context = React.useContext(Context);
  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          right: "-60%",
          top: "10%",
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
              Signup
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="signup-fullname"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="signup-username"
              label="Username"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="signup-email"
              label="Email"
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
              error={error}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(e.target.value != cnfPassword);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="confirm-password-textfield"
              label="Comfirm Password"
              variant="outlined"
              type="password"
              error={error}
              value={cnfPassword}
              onChange={(e) => {
                setCnfPassword(e.target.value);
                setError(e.target.value != password);
              }}
              helperText="password should match!"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={handleSignup}>
              Signup!
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ButtonBase onClick={context.handleLogin}>
              <Typography
                variant="subtitle2"
                component="p"
                sx={{ textDecoration: "1px underline solid black" }}
              >
                Already a user? Sign in
              </Typography>
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default Signup;
