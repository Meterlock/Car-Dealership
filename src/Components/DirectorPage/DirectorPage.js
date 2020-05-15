import React from 'react';
import Header from '../Header/Header';
import SectionTitle from '../SectionTitle/SectionTitle';
import Suppliers from '../Suppliers/Suppliers';
import Employees from '../Employees/Employees';
import Statistics from '../Statistics/Statistics';

class DirectorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: this.menuItems[0]
    };
  }

  menuItems = ["Statistics", "Employees", "Suppliers"];

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
            {this.state.currentSection === "Statistics" && <Statistics />}
            {this.state.currentSection === "Suppliers" && <Suppliers />}
            {this.state.currentSection === "Employees" && <Employees />}
        </div>      
    );
  }  
}

export default DirectorPage;
