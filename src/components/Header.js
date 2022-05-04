import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import logo from "../images/netflix-logo.png";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const history = useHistory();

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);
  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => history.push("/")}>
          <img src={logo} alt="logo netflix" className={classes.logo} />
        </IconButton>
        {user ? (
          <Avatar
            variant="square"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/profile")}
          />
        ) : (
          <Avatar
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  transparent: {
    backgroundColor: "transparent",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
}));

export default Header;
