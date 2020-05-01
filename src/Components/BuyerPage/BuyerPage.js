import React from 'react';
import Header from '../Header/Header';

class BuyerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  menuItems = ["supliers", "Clients"];

  clickMenuItem() {
    alert("menu click");
  }

  render() {
    return (
        <div>
            <Header items={this.menuItems}
                username={this.props.username}
                logOutCallback={() => this.props.logOutCallback()} 
                clickMenuCallback= {() => this.clickMenuItem()} />
            <h1>The</h1>
            <h1>Other</h1>
            <h1>Content</h1>
        </div>      
    );
  }  
}

export default BuyerPage;
