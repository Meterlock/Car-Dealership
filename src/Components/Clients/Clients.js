import React from 'react';
import ClientList from '../ClientList/ClientList';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <ClientList />
        </div>      
    );
  }  
}

export default Clients;
