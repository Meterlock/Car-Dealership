import React from 'react';
import SupplierInfo from '../SupplierInfo/SupplierInfo';
import {Form} from 'react-bootstrap';

class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers: [
        {
          name: "BMW Group",
          idn: "32454365463",
          address: "Munich, Germany",
          phone: "+1 324 34324324",
          email: "best@gmail.com"
        },
        {
          name: "Volkswagen AG",
          idn: "32454365463",
          address: "Wolfsburg, Germany",
          phone: "+1 324 34324324",
          email: "best@gmail.com"
        },
        {
          name: "Toyota",
          idn: "32454365463",
          address: "Tokyo, Japan",
          phone: "+1 324 34324324",
          email: "best@gmail.com"
        },
        {
          name: "Peugeot",
          idn: "32454365463",
          address: "Paris, France",
          phone: "+1 324 34324324",
          email: "best@gmail.com"
        },
        {
          name: "Land Rover",
          idn: "32454365463",
          address: "London, England",
          phone: "+1 324 34324324",
          email: "best@gmail.com"
        }
      ]
    };
  }

  render() {
    return (
        <div>
            <div className="mb-2 ml-3 mr-5 pr-5">
              <Form.Control placeholder="Search" /*onChange={filter array of users}*/></Form.Control>
            </div>   
            {this.state.suppliers.map((item) => <SupplierInfo supplier={item} />) }
        </div>      
    );
  }  
}

export default Suppliers;
