import React, { Component } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm';
import { hideWheel } from '../HideWheel/HideWheel'

class SignUpPage extends Component {
  componentDidMount() {
    hideWheel()
  }
  
  render() {
    return (
      <SignUpForm />
    )
  }
}


export default SignUpPage;