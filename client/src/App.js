import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginForm/LoginForm";
import LoginButton from "./components/LoginButton/LoginButton";
import SignupButton from "./components/SignupButton/SignupButton";
import RandomizerButton from "./components/RandomizerButton";
import NavBar from "./components/NavBar/NavBar";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import RestaurantsButton from "./components/RestaurantsButton/RestaurantsButton";



const App = () => (
  <div>
  <Header />
  <NavBar />
  <Login />
  <div>
  <LoginButton />
  <span>  </span>
  <SignupButton />
  </div>
  <RandomizerButton />
  <span> </span>
  <RestaurantsButton />
  <div>
  <SubmitButton />
  </div>
  <Footer />
  </div>
);

export default App;
