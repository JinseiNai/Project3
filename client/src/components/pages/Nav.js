import { Link } from "react-router-dom";
import React, { Component } from 'react'
import styled from 'react-emotion'

import Header from '../Header/Header';
import NavButton from '../NavButtons/index';
import RestaurantsButton from '../RestaurantsButton'
import ActivitiesButton from '../ActivitiesButton'
import FavsButton from '../FavsButton'
import CreateListButton from '../CreateListButton'
import RandomizerButton from '../RandomizerButton'

const BtnList = styled('ul')`
    list-style: none;
`
// const BtnSize = {
//     width: '100px'
// }

// class NavPage extends Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <BtnList>
//                     <li><FavsButton /></li>
//                     <li><CreateListButton /></li>
//                     <li><ActivitiesButton /></li>
//                     <li><RandomizerButton /></li>
//                 </BtnList>
//             </div>
//         )
//     }
// }

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
            <div>
                <Header />
                <BtnList>
                    <NavButton label="Favorites" />
                    <NavButton label="Activities" />
                    <NavButton label="Create A List" />
                    <NavButton label="Randomizer" />
                    <p>{this.state.firstName}</p>
                </BtnList>
                
            </div>
        )
    }
}

export default NavPage