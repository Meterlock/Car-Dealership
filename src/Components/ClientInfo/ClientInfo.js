import React from 'react';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class ClientInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: new Object()
    };
  }

  componentDidMount() {    
    axios.get(BASE_URL + "/api/Client/" + this.props.client,
        { 
            withCredentials: true
        }
    )
    .then((response) => {
      this.setState({client: response.data.data});
    })
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }

  render() {
    return (
        <div>
            <h2>{this.state.client.firstName + " " + this.state.client.lastName}</h2>
            <p>Birth date: {new Date(Date.parse(this.state.client.birthday)).toLocaleDateString()}</p>
            <p>Sex: {this.state.client.isMale ? "Male" : "Female"}</p>
            <p>Passport ID: {this.state.client.passportId}</p>
            <p>Phone: {this.state.client.phone}</p>
            <p>Email: {this.state.client.email}</p>
            <p>Address: {this.state.client.address}</p>
        </div>      
    );
  }  
}

export default ClientInfo;
