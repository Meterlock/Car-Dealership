import React from 'react';
import OrderItem from '../OrderItem/OrderItem';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <OrderItem />
        </div>      
    );
  }  
}

export default Orders;
