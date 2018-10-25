import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FavoritesCard from './FavoritesCard';
import axios from "axios"
class Favorites extends Component {
    constructor(){
        super();
        this.state= {
            favorites: ""
        }
    }
    componentDidMount() {
        
        let id = this.props.user._id
        console.log(id)
        let url = "/api/favorites/" + id
        axios.get(url)
        .then(response => {
            this.setState({
                favorites: response.data
            })
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <Header _logout={this.props._logout}/>
                {
                    this.state.favorites &&
                <FavoritesCard name={this.state.favorites.name} site={this.state.favorites.site} location={this.state.favorites.location} />
                }
            </div>
        )
    }
}

export default Favorites