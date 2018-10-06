import React, { Component } from 'react';

// import AppBar from './AppBar';
import './Header.css';
import PersistentDrawer from './PersistentDrawer';

class Header extends Component {
  render() {
    return (
      <div className="Header-Div">
      < PersistentDrawer />
        <header className="Header">
          <h1 className="Header-title" >GTFO!
          {/* Food Decid-a-nator!, Indecisi-Food, Food Roulette, Food Now!, Feed Me */}
          </h1>
        </header>
        <p className="Header-intro"><h2>
        Oh, where to eat!
        </h2>
        </p>
  );


      </div>
    );
  }
}

export default Header;