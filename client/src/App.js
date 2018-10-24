
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/Home"
import SignUpPage from "./components/SignUpForm/SignUpForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from "axios"
import LoginForm from "./components/LoginForm/LoginForm";
import Wheel from "./components/pages/Wheel"
import NavPage from "./components/pages/Nav";
import "./App.css";
// import logo from "./components/pages/gtfo.png"
// import wheel from "./components/Header/colorwheel.png"
import Filter from "./components/pages/Filter";
import Favorites from "./components/pages/Favorites";
import { Redirect } from 'react-router-dom'


class App extends Component {
  // state and passport work
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })

      }
    })
  }

  _login(username, password) {
    axios
      .post('/auth/login', {
        username,
        password
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
          console.log("logged in!")
          console.log(this.state.user)
        }
      })
  }

  // add components/pages here
  render() {
    const loggedIn = this.state.loggedIn;
    const user = this.state.user

    return (
      <Router>
        <div className="backgroundImage">
          {/* <div align="center" style={{paddingBottom:110}}>
         <img src={logo} width="200" height="200" ></img> 
        </div>  */}

          {/* <Header /> */}
          <div style={{ minHeight: 'calc(100vh - 50px)' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" render={() => <LoginForm _login={this._login} />} />
              <Route path="/signup" component={SignUpPage} />
              {user &&
                <Route path="/nav" render={() => <NavPage _logout={this._logout} user={this.state.user} loggedIn={this.state.loggedIn} />} />
              }
              {loggedIn &&
                <Route path="/wheel" render={() => <Wheel user={this.state.user} userId={this.state.user._id} />} />
              }
              {loggedIn &&
                <Route path="/filter" render={() => <Filter user={this.state.user} />} />
              }
              {loggedIn &&
                <Route path="/favorites" render={() => <Favorites user={this.state.user} />} />
              }

            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App;
