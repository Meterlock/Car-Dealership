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
          <div className="mb-2 ml-3 mr-5 pr-5">
            <Form.Control placeholder="Search" /*onChange={filter array of users}*/></Form.Control>
          </div>
          <ClientList />
        </div>      
    );
  }  
}

export default Clients;
