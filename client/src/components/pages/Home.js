import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'

class HomePage extends Component {

    render() {
        return (
            <div>
                <Link to="/login">
                    <LoginButton />
                </Link>
                <Link to="/signup">
                    <SignUpButton />
                </Link>
            </div>
        )
    }
}

export default HomePage