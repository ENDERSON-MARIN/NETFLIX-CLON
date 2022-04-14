import React from "react";
import { makeStyles } from "@material-ui/core";
import heroBanner from "../images/casa_de_papel.jpeg"

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundImage:`url(${heroBanner})`,
      position: "relative",
      height: "500px",
      objectFit:"contain",
      backgroundSize:"cover",
      backgroundPosition:"center"
  },
}));

export default Banner;
