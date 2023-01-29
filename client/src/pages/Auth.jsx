import * as React from "react";
// import axios from "axios";
import {
  Box,
  Paper,
//   TextField,
  Typography,
//   Grid,
//   Button,
  AppBar,
  Toolbar,
} from "@mui/material";

import Login from "../components/Login";
import Signup from "../components/Signup";
import Context from "../context/landing/Context";


const Auth = () => {
    const context = React.useContext(Context);
  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" component="h1">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          bgcolor: "aliceblue",
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${require("../img/login-bg.avif")})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        {context.isSignup ? <Signup /> : ""}
        {context.isLogin ? <Login /> : ""}
        
      </Box>
    </React.Fragment>
  );
};

export default Auth;
