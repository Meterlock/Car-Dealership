import React from 'react';
import Header from './Components/Header/Header';

class App extends React.Component {
  menuItems = ["Catalog", "Clients", "Orders", "Suppliers"];
  username = "Kirill";

  logOut() {
    alert("log out");
  }

  clickMenuItem() {
    alert("menu click");
  }

  render() {
    return (
      <div>
        <Header items={this.menuItems}
          username={this.username}
          logOutCallback={() => this.logOut()} 
          clickMenuCallback= {() => this.clickMenuItem()} />
        <h1>The</h1>
        <h1>Other</h1>
        <h1>Content</h1>
      </div>
    );
  }  
}

export default App;
