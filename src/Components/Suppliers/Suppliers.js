import React from 'react';
import SupplierInfo from '../SupplierInfo/SupplierInfo';
import {Form} from 'react-bootstrap';

class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Form.Control placeholder="Search" /*onChange={filter array of users}*/></Form.Control>
            <SupplierInfo />
        </div>      
    );
  }  
}

export default Suppliers;
