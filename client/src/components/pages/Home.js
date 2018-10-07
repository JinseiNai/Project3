import React from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'
import Footer from '../Footer/index'

const HomePage= () => (
    <div>
        <Link to="/login">
            <LoginButton />
        </Link>
        <Link to="/signup">
            <SignUpButton />
        </Link>
    </div>
)

export default HomePage