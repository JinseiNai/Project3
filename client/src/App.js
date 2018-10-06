import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/Home"
import SignUpPage from "./components/pages/SignUp";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/signup" component={ SignUpPage } />
      </Switch>
    </div>
  </Router>
);

export default App;
