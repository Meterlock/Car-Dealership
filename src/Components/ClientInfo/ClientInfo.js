import React from 'react';

class ClientInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <h2>Firstname Lastname</h2>
            <p>Birth date: 01.01.2019</p>
            <p>Sex: Male</p>
            <p>Passport ID: FSDF!$R#@RFff</p>
            <p>Phone: +123314132413</p>
            <p>Email: 12ffew@fwef.fp</p>
            <p>Address: ul FAF, Minsk</p>
        </div>      
    );
  }  
}

export default ClientInfo;
