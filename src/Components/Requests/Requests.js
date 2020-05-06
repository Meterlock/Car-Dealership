import React from 'react';
import RequestItem from '../RequestItem/RequestItem';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <OrderRequestFilter />
            <RequestItem />
        </div>      
    );
  }  
}

export default Requests;
