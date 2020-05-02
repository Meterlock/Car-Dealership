import React from 'react';
import Header from '../Header/Header';
import SectionTitle from '../SectionTitle/SectionTitle';
import Catalog from '../Catalog/Catalog';

class ManagerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentSection: this.menuItems[0]
    };
  }

  menuItems = ["Catalog", "Clients", "Orders", "Delivery requests"];

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
            {this.state.currentSection === "Catalog" && <Catalog/>}
        </div>      
    );
  }  
}

export default ManagerPage;
