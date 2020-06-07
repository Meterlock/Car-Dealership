import React from 'react';
import SupplierInfo from '../SupplierInfo/SupplierInfo';
import {Form} from 'react-bootstrap';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers: [],
      curSearch: ""
    };
    this.suppliers = [];
  }

  getSuppliers() {
    axios.get(BASE_URL + "/api/Supplier",
      { withCredentials: true }
    )
    .then(response => {this.suppliers = response.data.data; this.setState({suppliers: this.suppliers})})
    .catch((error) => alert("Bad request"));
  }

  componentDidMount() {
    this.getSuppliers();
  }

  filter(item) {
    return item.companyName.toLowerCase().includes(this.state.curSearch.toLowerCase());
  }

  render() {
    return (
        <div>
            <div className="mb-2 ml-3 mr-5 pr-5">
              <Form.Control placeholder="Search" onChange={(e) => this.setState({curSearch: e.target.value})}></Form.Control>
            </div>
            {this.state.suppliers.map((item) => this.filter(item) && <SupplierInfo key={item.id} supplier={item} />)}
        </div>      
    );
  }  
}

export default Suppliers;
