import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logo from "../images/netflix-logo.png";
import imageLogin from "../images/netflix-login.png";
import { NetflixButton, NetflixInput } from "../styled/styledComponents";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo netflix" className={classes.logo} />
      <NetflixButton className={classes.session}>Iniciar sesión</NetflixButton>
      <div className={classes.info}>
        <Typography variant="h4" gutterBottom>
          Unlimited films, TV programmes and more.
        </Typography>
        <Typography variant="h5">
          Watch anywhere. cancel at any time.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <div className={classes.inputBlock}>
          <NetflixInput placeholder="Email address" />
          <NetflixButton>GET STARTED</NetflixButton>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${imageLogin})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    top: 20,
    right: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
}));

export default Login;
