import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/pages/LoginPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import HomePage from "./components/pages/Home"


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/login" component={ LoginPage } />
      </Switch>
    </div>
  </Router>
);

export default App;
