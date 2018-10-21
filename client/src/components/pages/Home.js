import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'
import Header from '../Header/Header';
import { hideWheel } from '../HideWheel/HideWheel'

<<<<<<< HEAD

const HomePage= () => (
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
=======
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
>>>>>>> d454e9e61dc521710cf05f1e1a76fc0472f1662c

export default HomePage;