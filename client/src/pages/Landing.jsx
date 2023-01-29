import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
import { Link } from "react-router-dom";
import Context from "../context/landing/Context";

const Landing = () => {
  const context = React.useContext(Context);

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <img src="https://picsum.photos/50/" alt="logo" />
          <Typography
            variant="h4"
            component="h1"
            sx={{
              ml: 2,
              fontfamily: "Poppins, sans-serif",
              flexGrow: 1,
              textAlign: "left",
            }}
          >
            STAYFIT
          </Typography>
          <ButtonBase onClick={context.handleLogin}>
            <Link to="/auth">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    color: "white",
                    //   mr: 1,
                  }}
                >
                  Login
                </Typography>
                <AccountCircleIcon sx={{ color: "white" }} />
              </Box>
            </Link>
          </ButtonBase>
          <Link to="/auth">
            <Button
              onClick={context.handleSignup}
              variant="outlined"
              sx={{
                color: "white",
                border: "1px solid white",
                ml: 1,
                bgcolor: "navy",
                "&:hover": { bgcolor: "skyblue", border: "1px solid white" },
              }}
            >
              Sign me up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          top: "-10%",
          height: "100vh",
          width: "100vw",
          right: "0%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ bgcolor: "cyan" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontFamily: "Poppins, cursive", padding: 2, mt: 2 }}
              >
                Push your limits!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ bgcolor: "cyan" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontFamily: "Poppins, cursive", padding: 2 }}
              >
                Turn the pain into power!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ bgcolor: "cyan" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontFamily: "Poppins, cursive", padding: 2 }}
              >
                You don't find WILLPOWER, you CREATE it!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Paper elevation={3} sx={{padding: 2}}>
              <img
                src={require("../img/girl1.png")}
                alt="balaji"
                height={316}
                width={512}
              />
            </Paper>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Landing;
