import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Box } from "@mui/material";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import State from "./context/landing/State";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
      className="App"
      sx={{
        backgroundImage: `url(${require("./img/unsplash5.avif")})`,
        backgroundSize: "cover",
        backgroundReapeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <State>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </State>
    </Box>
  );
}

export default App;
