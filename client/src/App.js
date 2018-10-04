import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/pages/LoginPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route path="/signup" component={ SignUpForm } />
      </Switch>
    </div>
  </Router>
);

export default App;
