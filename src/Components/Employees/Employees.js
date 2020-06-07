import React from 'react';
import {Form} from 'react-bootstrap';
import EmployeeInfo from '../EmployeeInfo/EmployeeInfo';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      curSearch: ""
    };
    this.employees = [];
  }

  getEmployees() {
    axios.get(BASE_URL + "/api/User/Active",
      { withCredentials: true }
    )
    .then(response => {this.employees = response.data.data; this.setState({employees: this.employees});})
    .catch((error) => alert("Bad request"));
  }

  componentDidMount() {
    this.getEmployees();
  }

  filter(item) {
    return (item.firstName + item.lastName).toLowerCase().includes(this.state.curSearch.toLowerCase());
  }

  render() {
    return (
        <div>
            <div className="mb-2 ml-3 mr-5 pr-5">
              <Form.Control placeholder="Search" onChange={(e) => this.setState({curSearch: e.target.value})} ></Form.Control>
            </div>   
            {this.state.employees.map((item) => this.filter(item) && <EmployeeInfo key={item.id} employee={item} />)}
        </div>      
    );
  }  
}

export default Employees;
