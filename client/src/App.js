import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/pages/LoginPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


const App = () => (
  <Router>
    <div>
      <Header />
      <div style={{ minHeight: 'calc(100hv - 301px)' }}>
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route path="/signup" component={ SignUpForm } />
      </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
