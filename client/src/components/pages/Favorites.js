import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FavoritesCard from './FavoritesCard';

class Favorites extends Component {
    render() {
        return (
            <div>
                <Header />
                   <FavoritesCard /> 
                <Footer />
            </div>
        )
    }
}

export default Favorites