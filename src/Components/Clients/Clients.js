import React from 'react';
import ClientList from '../ClientList/ClientList';
import {Form} from 'react-bootstrap';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      curSearch: ""
    };
    this.clients = [];
  }

  getClients() {
    axios.get(BASE_URL + "/api/Client",
      { withCredentials: true }
    )
    .then(response => this.getOrdersForClients(response.data.data))
    .catch((error) => alert("Bad request"));
  }

  getOrdersForClients(arr) {
    this.clients = arr.map((item) => {item.orders = []; return item;});
    this.getOrdersByClientId();
  }

  getOrdersByClientId() {
    this.clients.forEach((element) => {
      axios.get(BASE_URL + "/api/Order/ByClient/" + element.id,
        { withCredentials: true }
      )
      .then(response => {element.orders = response.data.data; this.setState({clients: this.clients});})
      .catch((error) => alert("Bad request"));
    });    
  }

  componentDidMount() {
    this.getClients();
  }

  filter(item) {
    return (item.firstName + item.lastName + item.passportId).toLowerCase().includes(this.state.curSearch);
  }

  handleComplete(id) {
    axios.post(BASE_URL + "/api/Order/Promote", null,
      {
        withCredentials: true,
        params: { id: parseInt(id) }
      }
    )
    .then(() => { this.getClients() })
    .catch((error) => alert("Bad request"));
  }

  render() {
    return (
        <div>
          <div className="mb-2 ml-3 mr-5 pr-5">
            <Form.Control placeholder="Search" onChange={(e) => this.setState({curSearch: e.target.value})}></Form.Control>
          </div>
          <ClientList clients={this.state.clients.filter((item) => this.filter(item))}
            handleComplete={(id) => this.handleComplete(id)} />
        </div>
    );
  }  
}

export default Clients;
