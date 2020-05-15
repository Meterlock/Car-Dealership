import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          id: "1",
          startdate: "28.04.2020",
          creator: "Some Body",
          status: "Resolved",
          enddate: "08.05.2020"
        },
        {
          id: "2",
          startdate: "30.04.2020",
          creator: "Jason Piers",
          status: "Opened",
          enddate: null
        },
        {
          id: "3",
          startdate: "11.05.2020",
          creator: "Ben Stenl",
          status: "Resolved",
          enddate: "18.05.2020"
        }
      ]
    };
  }

  render() {
    return (
        <div>
            <OrderRequestFilter />
            {this.state.orders.map((item) => <OrderItem order={item} />) }
        </div>      
    );
  }  
}

export default Orders;
