import React from "react";
import { Typography } from "@material-ui/core";
import "./Progress.css";

const Progress = ({ attempt, guessList }) => {
  return (
    <div>
      <Typography styles={{ marginTop: "50px" }} variant="h2">
        Guess # {attempt}
      </Typography>
      <ul className="progressBar_history">{guessList}</ul>
    </div>
  );
};

export default Progress;
