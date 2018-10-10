import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/Home"
import SignUpPage from "./components/SignUpForm/SignUpForm";
// import SignUpForm from "./components/SignUpForm/SignUpForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from "axios"
import LoginForm from "./components/LoginForm/LoginForm";
import Wheel from "./components/pages/Wheel"
import NavPage from "./components/pages/Nav";


// const App = () => (
//   <Router>
//     <div>
//       <Header />
//       <div style={{ minHeight: 'calc(100vh - 301px)' }}>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/login" component={LoginPage} />
//           <Route path="/signup" component={SignUpPage} />
//         </Switch>
//       </div>
//       <Footer />
//     </div>
//   </Router>
// );

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
        }
      })
  }

  // add components/pages here
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <div style={{ minHeight: 'calc(100vh - 301px)' }}>
            <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route path="/login" render={()=> <LoginForm _login = {this._login}/> } />
              <Route path="/signup" component={ SignUpPage } />
              <Route path="/nav" component={ NavPage } />
              <Route path="/wheel" component={ Wheel } />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App;
