import { Link } from "react-router-dom";
import React, { Component } from 'react'
import styled from 'react-emotion'
import Header from '../Header/Header';
import NavButton from '../NavButtons/index';
import { hideWheel } from '../HideWheel/HideWheel'

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

    componentDidMount() {
        hideWheel()
    }
    
    render() {
        return (
            <div align="center">
            
                {/* <Header /> */}
                <div class="span2" >
                <BtnList > 
                    <li className="listitem" ><NavButton label="Favorites" /></li>
                    <br></br>
                    <li className="listitem"><NavButton label="Activities" /> </li>
                    <br></br>
                    <li className="listitem"><NavButton label="Create List" /> </li>
                    <br></br>
                    <li className="listitem"><NavButton label="Randomizer" /> </li>
                    <p>{this.state.firstName}</p>
                </BtnList>
                </div>
            
                
            </div>
        )
    }
}

export default NavPage