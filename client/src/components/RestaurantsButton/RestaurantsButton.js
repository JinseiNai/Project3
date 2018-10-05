
import React from "react";
import ReactDOM from "react-dom";


class RestaurantsButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}
      className="btn btn-info mt-3">
        Restaurants
      </button>
    );
  }
}
export default RestaurantsButton;


