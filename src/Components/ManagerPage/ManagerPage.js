import React from 'react';
import Header from '../Header/Header';
import {Tab, Tabs} from 'react-bootstrap';

class ManagerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: "home"
    };
  }

  menuItems = ["Catalog", "Clients", "Orders", "Delivery requests"];
  //key = "home";

  clickMenuItem(itemName) {
    alert(itemName);
  }

  render() {
    return (
        <div>
            <Header items={this.menuItems}
                username={this.props.username}
                logOutCallback={() => this.props.logOutCallback()}
                clickMenuCallback= {(i) => this.clickMenuItem(i)} />
            <h1>The</h1>
            <h1>Other</h1>
            <h1>Content</h1>
            <Tabs
      id="controlled-tab-example"
      activeKey={this.state.key}
      onSelect={(k) => (this.setState({key: k}))}
    >
      <Tab eventKey="home" title="Home">
      <h1>Content</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <h1>Content</h1>
      </Tab>
      <Tab eventKey="contact" title="Contact">
      <h1>Content</h1>
      </Tab>
    </Tabs>
        </div>      
    );
  }  
}

export default ManagerPage;
