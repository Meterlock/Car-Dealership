import React from 'react';
import Header from '../Header/Header';
import SectionTitle from '../SectionTitle/SectionTitle';
import Requests from '../Requests/Requests';
import Suppliers from '../Suppliers/Suppliers';

class BuyerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: this.menuItems[0]
    };
  }

  menuItems = ["Delivery requests", "Suppliers"];

  clickMenuItem(itemName) {
    this.setState({currentSection: itemName});
  }

  render() {
    return (
        <div>
            <Header items={this.menuItems}
                username={this.props.username}
                logOutCallback={() => this.props.logOutCallback()} 
                clickMenuCallback= {(i) => this.clickMenuItem(i)} />
            <SectionTitle title={this.state.currentSection}/>
            {this.state.currentSection === "Delivery requests" && <Requests />}
            {this.state.currentSection === "Suppliers" && <Suppliers />}
        </div>      
    );
  }  
}

export default BuyerPage;
