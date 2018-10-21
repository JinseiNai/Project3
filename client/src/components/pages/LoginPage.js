import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm';
import { hideWheel } from '../HideWheel/HideWheel'

class LoginPage extends Component {
    componentDidMount() {
        hideWheel()
    }
    
    render() {
        return (
            <LoginForm />
        )
    }
}

export default LoginPage