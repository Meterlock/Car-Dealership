import React from 'react';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';
import WorkOrderItem from '../WorkOrderItem/WorkOrderItem';

class WorkOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workorders: [
        {
          id: "1",
          total: "170",
          startdate: "28.04.2020",
          creator: "Some Body",
          client: "Kirill Alexeenko",
          phone: "+375 44 7866648",
          status: "In progress",
          enddate: null
        },
        {
          id: "2",
          total: "440",
          startdate: "30.04.2020",
          creator: "Jason Piers",
          client: "Denis Kaminsky",
          phone: "+375 44 8234324",
          status: "Completed",
          enddate: "18.05.2020"
        },
        {
          id: "3",
          total: "200",
          startdate: "11.05.2020",
          creator: "Ben Stenl",
          client: "Robin Bad",
          phone: "+375 44 7866648",
          status: "In progress",
          enddate: null
        }
      ]
    };
  }

  render() {
    return (
        <div>
            <OrderRequestFilter />
            {this.state.workorders.map((item) => <WorkOrderItem workorder={item} />) }
        </div>      
    );
  }  
}

export default WorkOrders;
