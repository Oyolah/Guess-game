import React, { Component } from "react";
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import Form from "./components/Form";
import Progress from "./components/Progress";
import { generateRandomNumber } from "./util";

class App extends Component {
  state = {
    generatedNumber: generateRandomNumber(),
    guess: undefined,
    allGuess: [],
    attempt: 0,
  };
  updateAppState = (guess) => {
    const absDiff = Math.abs(guess - this.state.generatedNumber);
    console.log(absDiff);

    this.setState((prevState) => ({
      guess,
      allGuess: [...prevState.allGuess, { guess }],
      attempt: prevState.attempt + 1,
    }));
  };
  render() {
    const { allGuess, attempt } = this.state;

    const guessList = allGuess.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));
    return (
      <div>
        <Grid
          container
          style={{ height: "100vh" }}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Paper style={{ padding: "20px" }} elevation={5}>
              <Typography align="Center" variant="h2" gutterBottom>
                HOT or COLD
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Form returnGuessToApp={(value) => this.updateAppState(value)} />
              <Progress attempt={attempt} guessList={guessList}></Progress>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;
