import React from 'react';
import Header from '../Header/Header';
import SectionTitle from '../SectionTitle/SectionTitle';
import WorkOrders from '../WorkOrders/WorkOrders';
import Service from '../Service/Service';

class ServiceManPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: this.menuItems[0]
    };
  }

  menuItems = ["Service", "Work Orders"];

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
            {this.state.currentSection === "Work Orders" && <WorkOrders />}
            {this.state.currentSection === "Service" && <Service />}
        </div>      
    );
  }  
}

export default ServiceManPage;
