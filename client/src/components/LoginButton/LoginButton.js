import React from "react";

// import ReactDOM from "react-dom";
// import styled from 'react-emotion'

// const SubmitButton = styled('button')({
//   padding: 15,
//   display: 'flex',
//   flexDirection: 'center',
// })
// import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';

//<Button component={Link} to="/LoginForm">
  //Link
//</Button>
// const Login = styled('login') ({
//   alignItems: 'center',
//   justifyContent: 'space-aroundS'
// })
class LoginButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
    
      <button class="buttonHolder" onClick={this.handleClick}
      className="btn btn-success mt-3 mr-4 btn-lg" >
        Login
      </button>
    
    );
  }
}

export default LoginButton;


