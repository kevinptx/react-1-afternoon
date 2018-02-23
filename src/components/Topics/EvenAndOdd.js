import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" />
        <button className="confirmationButton" />
        <span className="resultsBox" />
        <span className="resultsBox" />
      </div>
    );
  }
}
