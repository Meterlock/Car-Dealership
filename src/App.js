import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ManagerPage from './Components/ManagerPage/ManagerPage';
import ServiceManPage from './Components/ServiceManPage/ServiceManPage';
import BuyerPage from './Components/BuyerPage/BuyerPage';
import DirectorPage from './Components/DirectorPage/DirectorPage';
import LoginPage from './Components/LoginPage/LoginPage';
import AdminPage from './Components/AdminPage/AdminPage';
import {BASE_URL} from './vars';
const axios = require('axios');
var md5 = require('md5');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRole: 0,
      userName: "",
      userId: null
    };
  }

  componentDidMount() {
      axios.get(BASE_URL + "/api/Account/UserInfo/Current",
        { withCredentials: true }
      )
      .then(response => this.setState({
        userRole: response.data.data.role.id, 
        userName: response.data.data.firstName + " " + response.data.data.lastName,
        userId: response.data.data.id
      }))
      .catch((error) => error.response ? null : alert("Bad request"));
  }

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
    .then(response => this.setState({
      userRole: response.data.data.role.id, 
      userName: response.data.data.firstName + " " + response.data.data.lastName,
      userId: response.data.data.id
    }))
    .catch(error => error.response ? alert("Wrong credentials!") : alert("Bad request"));
  }

  render() {
    return (
      <div id="general-div">
        {this.state.userRole === 0 && <LoginPage logInCallback={(email, password) => this.logIn(email, password)} />}
        {this.state.userRole === 2 && <ManagerPage id={this.state.userId} logOutCallback={() => this.logOut()} username={this.state.userName} />}
        {this.state.userRole === 4 && <ServiceManPage id={this.state.userId} logOutCallback={() => this.logOut()} username={this.state.userName} />}
        {this.state.userRole === 3 && <BuyerPage logOutCallback={() => this.logOut()} username={this.state.userName} />}
        {this.state.userRole === 5 && <DirectorPage logOutCallback={() => this.logOut()} username={this.state.userName} />}
        {this.state.userRole === 1 && <AdminPage logOutCallback={() => this.logOut()} username={this.state.userName} />  }
      </div>
    );
  }  
}

export default App;
