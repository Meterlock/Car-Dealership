import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ManagerPage from './Components/ManagerPage/ManagerPage';
import ServiceManPage from './Components/ServiceManPage/ServiceManPage';
import BuyerPage from './Components/BuyerPage/BuyerPage';
import DirectorPage from './Components/DirectorPage/DirectorPage';
import LoginPage from './Components/LoginPage/LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRole: 4
    };
  }

  username = "Kirill";

  logOut() {
    this.setState({userRole: 0});
  }

  render() {
    return (
      <div id="general-div">        
        {this.state.userRole === 0 && <LoginPage />}
        {this.state.userRole === 1 && <ManagerPage logOutCallback={() => this.logOut()} username={this.username} />}
        {this.state.userRole === 2 && <ServiceManPage logOutCallback={() => this.logOut()} username={this.username} />}
        {this.state.userRole === 3 && <BuyerPage logOutCallback={() => this.logOut()} username={this.username} />}
        {this.state.userRole === 4 && <DirectorPage logOutCallback={() => this.logOut()} username={this.username} />}
      </div>
    );
  }  
}

export default App;
