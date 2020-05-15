import React from 'react';
import RequestItem from '../RequestItem/RequestItem';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [
        {
          id: "1",
          amount: "15",
          startdate: "28.04.2020",
          creator: "Some Body",
          assignee: "Billie Body",
          status: "In progress",
          enddate: "08.05.2020",
          btn: "Handle"
        },
        {
          id: "2",
          amount: "4",
          startdate: "30.04.2020",
          creator: "Jason Piers",
          assignee: "John Doe",
          status: "Handled",
          enddate: "15.05.2020",
          btn: "Resolve"
        },
        {
          id: "3",
          amount: "8",
          startdate: "11.05.2020",
          creator: "Ben Kama",
          assignee: "Some Body",
          status: "Resolved",
          enddate: "18.05.2020",
          btn: null
        }
      ]
    };
  }

  render() {
    return (
        <div>
            <OrderRequestFilter />
            {this.state.requests.map((item) => <RequestItem request={item} />) }
        </div>      
    );
  }  
}

export default Requests;
