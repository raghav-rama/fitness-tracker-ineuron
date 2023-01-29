import * as React from "react";
import Context from "./Context";

const State = (props) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [isSignup, setIsSignup] = React.useState(true);
  const handleLogin = () => {
    setIsLogin(true);
    setIsSignup(false);
  };
  const handleSignup = () => {
    setIsLogin(false);
    setIsSignup(true);
  };
  return (
    <Context.Provider value={{ isLogin, isSignup, handleLogin, handleSignup }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
