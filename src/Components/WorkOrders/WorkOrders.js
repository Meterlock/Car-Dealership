import React from 'react';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';
import WorkOrderItem from '../WorkOrderItem/WorkOrderItem';

class WorkOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <OrderRequestFilter />
            <WorkOrderItem />
        </div>      
    );
  }  
}

export default WorkOrders;
