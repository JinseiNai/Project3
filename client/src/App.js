import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/Home"
import SignUpPage from "./components/pages/SignUp";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const App = () => (
  <Router>
    <div>
        <Header />
        <div style={{ minHeight: 'calc(100vh - 301px)' }}>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/signup" component={ SignUpPage } />
      </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
