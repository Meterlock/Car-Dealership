import React from 'react';
import CarListItem from '../CarListItem/CarListItem';

class RequestBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        step: true
    };
  }

  render() {
    return (
        <div>
            {this.state.step ? 
            <h2>Waiting for configuration...</h2> :
            <CarListItem />}
        </div>      
    );
  }  
}

export default RequestBody;
