import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'


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

export default HomePage;