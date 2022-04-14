import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import heroBanner from "../images/casa_de_papel.jpeg";

const Banner = () => {
  const classes = useStyles();

  const truncate = (string, n) =>
    string?.length > n ? `${string.substring(0, n - 1)} ...` : string;
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          Movie Title
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography
          style={{ wordWrap: "break-word" }}
          variant="h6"
          className={classes.description}
        >
          {truncate(
            "Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description Movie Description ",
            160
          )}
        </Typography>
        <div className={classes.fadeEfect}></div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroBanner})`,
    position: "relative",
    height: "500px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  fadeEfect: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
  },
}));

export default Banner;
