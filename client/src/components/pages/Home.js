import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'
// import Header from '../Header/Header';
import logo from "../../gtfo.png";


class HomePage extends Component {
    render() {
        return(
        <div align= "center"  >
        <div align="center" style={{paddingBottom:25}}>
        <img src={logo} width="250" height="250" ></img>
        </div>
            {/* <style>{'body { background-color: skyblue; }'}</style> */}
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

export default HomePage;