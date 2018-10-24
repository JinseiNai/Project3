import React, { Component } from 'react';
import MenuAppBar from './AppBar';
import './Header.css';
// import Footer from '../Footer/Footer';
// import PersistentDrawer from './PersistentDrawer';
class Header extends Component {
 render() {
   return (
     <div className="Header-Div">
     {/* < MenuAppBar /> */}
       <header className="Header">
       < MenuAppBar _logout={this.props._logout} />
         <h1 className="Header-title" >
         {/* Food Decid-a-nator!, Indecisi-Food, Food Roulette, Food Now!, Feed Me */}
         </h1>
         {/* <p className="Header-intro">
        Oh, where to eat!
       </p> */}
       </header>

 
     </div>
   );
 };
}
 export default Header;

