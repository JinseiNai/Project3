import React from "react";
import ReactDOM from "react-dom";

//import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';

//<Button component={Link} to="/LoginForm">
  //Link
//</Button>
class ActivitiesButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}
      className="btn btn-info mt-3">
        Activities
      </button>
    );
  }
}
export default ActivitiesButton;


