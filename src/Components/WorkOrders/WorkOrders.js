import React from 'react';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';
import WorkOrderItem from '../WorkOrderItem/WorkOrderItem';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class WorkOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workorders: [],
      statuses: [],
      curStatus: "",
      curSearch: ""
    };
    this.workorders = [];
    this.forCurUserOnly = false;
  }

  getWorkOrders() {
    let url = this.forCurUserOnly ? "/api/WorkOrder/ByUser/Current" : "/api/WorkOrder";
    axios.get(BASE_URL + url,
      { withCredentials: true }
    )
    .then(response => {this.workorders = response.data.data; this.setState({workorders: this.workorders});})
    .catch(() => alert("Bad request"));
  }

  getStatuses() {
    axios.get(BASE_URL + "/api/WorkOrderStatus",
      { withCredentials: true }
    )
    .then(response => this.setState({statuses: response.data.data}))
    .catch(() => alert("Bad request"));
  }

  componentDidMount() {
    this.getWorkOrders();
    this.getStatuses();
  }

  handleComplete(id) {
    axios.put(BASE_URL + "/api/WorkOrder/Complete", null,
      { 
        withCredentials: true,
        params: { orderId: parseInt(id) } 
      }
    )
    .then(() => { this.getWorkOrders() })
    .catch(() => alert("Bad request"));
  }

  filter(item) {
    return (this.state.curStatus ? item.status.id == this.state.curStatus : true) && 
      (item.id.toString().toLowerCase().includes(this.state.curSearch));
  }

  /*filterStatus(id) {
    let tmp = this.workorders.filter(item => id ? item.status.id == id : true);
    this.setState({workorders: tmp});
  }*/

  render() {
    return (
        <div>
            <OrderRequestFilter onSearch={(str) => this.setState({curSearch: str})} 
              statuses={this.state.statuses} onStatus={(id) => this.setState({curStatus: id})} 
              switch={(flag) => {this.forCurUserOnly = flag; this.getWorkOrders();}} />
            {this.state.workorders.map((item) => this.filter(item) &&
              <WorkOrderItem key={item.id} workorder={item} status={item.status.id == 1} onComplete={(id) => this.handleComplete(id)} />) }
        </div>      
    );
  }  
}

export default WorkOrders;
