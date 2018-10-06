import React from "react";
import ReactDOM from "react-dom";

class RandomButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}
        className="btn btn-danger mt-3">
        Random
      </button>
    );
  }
}
export default RandomButton;