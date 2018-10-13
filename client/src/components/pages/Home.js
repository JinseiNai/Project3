import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'
import Header from '../Header/Header';
import NavButton from "../NavButtons/Containedbuttons"

class HomePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <Link to="/login">
                    {/* <LoginButton /> */}
                    <NavButton />
                </Link>
                <Link to="/signup">
                    {/* <SignUpButton /> */}
                </Link>
            </div>
        )
    }
}

export default HomePage