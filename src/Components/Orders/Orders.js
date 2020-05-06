import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <OrderRequestFilter />
            <OrderItem />
        </div>      
    );
  }  
}

export default Orders;
