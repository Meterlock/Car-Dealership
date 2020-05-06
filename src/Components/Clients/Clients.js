import React from 'react';
import ClientList from '../ClientList/ClientList';
import {Form} from 'react-bootstrap';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Form.Control placeholder="Search" /*onChange={filter array of users}*/></Form.Control>
            <ClientList />
        </div>      
    );
  }  
}

export default Clients;
