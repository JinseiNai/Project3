import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginForm/LoginForm";
import LoginButton from "./components/LoginButton/LoginButton";
import SignupButton from "./components/SignupButton/SignupButton";
import RandomizeButton from "./components/RandomizeButton";
import Logo from "./components/Logo/Logo";


// let imgUrl = '1.jpg'
// let styles = {
//   root: {
//     backgroundImage: 'url(' + imgUrl + ')',
//   }
// }

const Home = () => (
  <div>
  <Header />
  <Logo />
  <Login />
  <div>
  <LoginButton />
  <span>  </span>
  <SignupButton />
  </div>
  <RandomizeButton />
  <Footer />
  </div>
);

export default Home;
