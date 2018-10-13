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
       < MenuAppBar />
         <h1 className="Header-title" >
         {/* Food Decid-a-nator!, Indecisi-Food, Food Roulette, Food Now!, Feed Me */}
         </h1>
       </header>
       <p className="Header-intro"><h2>
       Oh, where to eat!
       </h2>
       </p>
 
     </div>
   );
 };
}
 export default Header;

