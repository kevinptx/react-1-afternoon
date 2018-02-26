import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      names: [
        "Eric",
        "Erin",
        "Efrain",
        "George",
        "Ray",
        "Hassan",
        "Suzie",
        "Christie",
        "Melissa",
        "Melody"
      ],
      userInput: "",
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    let names = this.state.names;
    let filteredNames = names.filter(name => name.includes(userInput));
    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText" />
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterNames(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
