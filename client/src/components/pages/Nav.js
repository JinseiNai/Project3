import React from 'react'
import { Link } from "react-router-dom";
import RestaurantsButton from '../RestaurantsButton/NavPage'
import ActivitiesButton from '../ActivitiesButton/NavPage'
import FavsButton from '../FavsButton/NavPage'
import CreateListButton from '../CreateListButton/NavPage'
import RandomizerButton from '../RanddomizerButton/NavPage'


const NavPage= () => (
    <div align= "center">
   <style>{'body { background-color: skyblue; }'}</style>
    
        <Link to="/Restaurants">
            <RestaurantsButton />
        </Link>
        <span> </span>
        <Link to="/Activities">
            <ActivitiesButton />
        </Link>
        <Link to="/Favs">
            <FavsButton />
        </Link>
        <Link to="/CreateList">
            <CreateListButton />
        </Link>
        <Link to="/Randomizer">
            <RandomizerButton />
        </Link>
    
    </div>
)

export default NavPage