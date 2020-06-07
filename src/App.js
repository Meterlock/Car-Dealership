import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ManagerPage from './Components/ManagerPage/ManagerPage';
import ServiceManPage from './Components/ServiceManPage/ServiceManPage';
import BuyerPage from './Components/BuyerPage/BuyerPage';
import DirectorPage from './Components/DirectorPage/DirectorPage';
import LoginPage from './Components/LoginPage/LoginPage';
import {BASE_URL} from './vars';
const axios = require('axios');
var md5 = require('md5');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRole: 0
    };
  }

  username = "Kirill";

  logOut() {
    axios.post(BASE_URL + "/api/Account/SignOut", 
      null,
      {
        withCredentials: true
      }
    )
    .then(() => this.setState({userRole: 0}))
    .catch(() => alert("Bad request"));
  }

  logIn(email, password) {
    axios.post(BASE_URL + "/api/Account/SignIn",
      {
        "email": email,
        "passwordHash": md5(password)
      },
      {
        withCredentials: true
      }
    )
    .then(response => this.setState({userRole: 4}))
    .catch(error => error.response.status === 401 ? alert("Wrong credentials!") : alert("Bad request"));
  }

  render() {
    return (
      <div id="general-div">
        {this.state.userRole === 0 && <LoginPage logInCallback={(email, password) => this.logIn("harman@autodealer.com", "1234567")} />}
        {this.state.userRole === 1 && <ManagerPage logOutCallback={() => this.logOut()} username={this.username} />}
        {this.state.userRole === 2 && <ServiceManPage logOutCallback={() => this.logOut()} username={this.username} />}
        {this.state.userRole === 3 && <BuyerPage logOutCallback={() => this.logOut()} username={this.username} />}
        {this.state.userRole === 4 && <DirectorPage logOutCallback={() => this.logOut()} username={this.username} />}
      </div>
    );
  }  
}

export default App;
