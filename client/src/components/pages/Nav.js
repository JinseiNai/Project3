import { Link } from "react-router-dom";
import React, { Component } from 'react'
import styled from 'react-emotion'
import Header from '../Header/Header';
import NavButton from '../NavButtons/index';

const BtnList = styled('ul')`
    list-style: none;
`
class NavPage extends Component {
    constructor() {
        super()
        this.state = {
          firstName:""
        }
        
      }

    componentDidUpdate (prevProps) {
        if(prevProps.user !== this.props.user) {
            this.setState({
                firstName: this.props.user.local.username
            })
        }
    }
    
    render() {
        return (
            <div align="center">
                <Header _logout={this.props._logout} />
                <div className="span2" > 
                <p> Welcome back! {this.state.firstName}</p>
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