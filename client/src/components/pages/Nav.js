import { Link } from "react-router-dom";
import React, { Component } from 'react'
import styled from 'react-emotion'
import Header from '../Header/Header';
import NavButton from '../NavButtons/index';
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';

const BtnList = styled('ul')`
    list-style: none;
`

class NavPage extends Component {
    constructor() {
        super()
        this.state = {
            firstName: null
        }

    }

    
    // componentDidUpdate(prevProps) {
    //     if (prevProps.user !== this.props.user) {
    //         this.setState({
    //             firstName: this.props.user.local.username
    //         })
    //     }  
    // }

    

    render() {
        
        // waiting for conditional
        return (
            <div align="center">
                <div className="span2" >
                    <Header _logout={this.props._logout} />
                    <BtnList >
                        <li className="listitem" ><NavButton label="Favorites" /></li>
                        <br></br>
                        <li className="listitem"><NavButton label="Activities" /> </li>
                        <br></br>
                        <li className="listitem"><NavButton label="Create List" /> </li>
                        <br></br>
                        <li className="listitem"><NavButton label="Randomizer" /> </li>

                    </BtnList>
                </div>
            </div>
        )
    }
}

export default NavPage