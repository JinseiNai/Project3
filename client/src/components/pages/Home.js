import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'
import { hideWheel } from '../HideWheel/HideWheel'

class HomePage extends Component {
    componentDidMount() {
        hideWheel()
    }
    render() {
        return(
        <div align= "center"  >
            <style>{'body { background-color: skyblue; }'}</style>
            <Link to="/login">
                <LoginButton />
            </Link>
            <span> </span>
            <Link to="/signup">
                <SignUpButton />
            </Link>
        </div>
        )
    }
}

export default HomePage