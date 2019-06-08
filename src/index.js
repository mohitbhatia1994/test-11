import React from "react";
import { render } from "react-dom";
import {
  VictoryChart,
  VictoryScatter,
  VictorySelectionContainer
} from "victory";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ["Hello World"]
    };
  }

  render() {
    console.log(process.env);
    return <div>{this.state.books}</div>;
  }
}

render(<App />, document.getElementById("root"));
