import React from 'react';
import Header from '../Header/Header';
import SectionTitle from '../SectionTitle/SectionTitle';
import Catalog from '../Catalog/Catalog';
import Orders from '../Orders/Orders';
import Clients from '../Clients/Clients';
import Requests from '../Requests/Requests';

class ManagerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentSection: this.menuItems[0]
    };
  }

  menuItems = ["Catalog", "Clients", "Orders", "Delivery Requests"];

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
            {this.state.currentSection === "Catalog" && <Catalog />}
            {this.state.currentSection === "Orders" && <Orders id={this.props.id} />}
            {this.state.currentSection === "Clients" && <Clients id={this.props.id} />}
            {this.state.currentSection === "Delivery Requests" && <Requests buyer={false} />}
        </div>      
    );
  }  
}

export default ManagerPage;
