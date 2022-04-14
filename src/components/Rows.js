import React from "react";
import { makeStyles } from "@material-ui/core";

const Rows = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Rows</h1>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Rows;
