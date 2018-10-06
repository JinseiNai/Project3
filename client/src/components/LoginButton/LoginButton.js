import React from "react";
import ReactDOM from "react-dom";

//import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';

//<Button component={Link} to="/LoginForm">
  //Link
//</Button>
class LoginButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}
      className="btn btn-success mt-3">
        Login
      </button>
    );
  }
}
export default LoginButton;


