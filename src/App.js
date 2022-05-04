import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Paypal from "./pages/Paypal";
import Home from "./pages/Home";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Redirect } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
      }}
    >
      <div className={classes.root}>
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => {
                return user ? <Redirect to="/" /> : <Login />;
              }}
            />
            <Route
              exact
              path="/profile"
              render={() => {
                return user ? <Profile /> : <Login />;
              }}
            />
            <Route
              exact
              path="/checkout"
              render={() => {
                return user ? <Paypal /> : <Login />;
              }}
            />

            <Route
              exact
              path="/"
              render={() => {
                return user ? <Home /> : <Login />;
              }}
            />
          </Switch>
        </Router>
      </div>
    </PayPalScriptProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));

export default App;
