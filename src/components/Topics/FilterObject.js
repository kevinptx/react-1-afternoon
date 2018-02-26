import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      dogs: [
        {
          name: "Fido",
          breed: "Great Dane",
          age: 2
        },
        {
          name: "Bob",
          age: "5",
          hairColor: "brown"
        },
        {
          name: "Lucy",
          title: "Guide Dog"
        }
      ],
      userInput: "",
      filteredDogs: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filteredDogs(prop) {
    let dogs = this.state.dogs;
    let filteredDogs = dogs.filter(dog => dog.hasOwnProperty(prop));
    this.setState({ filteredDogs: filteredDogs });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.filteredDogs, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filteredDogs(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredDogs, null, 10)}
        </span>
      </div>
    );
  }
}
