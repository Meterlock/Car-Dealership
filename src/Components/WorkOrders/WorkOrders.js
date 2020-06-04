import React from 'react';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';
import WorkOrderItem from '../WorkOrderItem/WorkOrderItem';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class WorkOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workorders: []
    };
    this.workorders = [];
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/WorkOrder",
      { withCredentials: true }
    )
    .then(response => {this.workorders = response.data.data; this.setState({workorders: this.workorders});})
    .catch(() => alert("Bad request"));
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
