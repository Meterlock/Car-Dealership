import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      statuses: [],
      curStatus: "",
      curSearch: ""
    };
    this.orders = [];
    this.forCurUserOnly = false;
  }

  getOrders() {
    let url = this.forCurUserOnly ? "/api/Order/ByManager/Current" : "/api/Order";
    axios.get(BASE_URL + url,
      { withCredentials: true }
    )
    .then(response => {this.orders = response.data.data; this.setState({orders: this.orders});})
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }

  getStatuses() {
    axios.get(BASE_URL + "/api/OrderStatus",
      { withCredentials: true }
    )
    .then(response => this.setState({statuses: response.data.data}))
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }

  componentDidMount() {
    this.getOrders();
    this.getStatuses();
  }

  handleComplete(id) {
    axios.post(BASE_URL + "/api/Order/Promote", null,
      {
        withCredentials: true,
        params: { id: parseInt(id) }
      }
    )
    .then(() => { this.getOrders() })
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }

  filter(item) {
    return (this.state.curStatus ? item.status.id == this.state.curStatus : true) && 
      (item.id.toString().toLowerCase().includes(this.state.curSearch));
  }

  render() {
    return (
        <div>
            <OrderRequestFilter onSearch={(str) => this.setState({curSearch: str})} 
              statuses={this.state.statuses} onStatus={(id) => this.setState({curStatus: id})} 
              switch={(flag) => {this.forCurUserOnly = flag; this.getOrders();}} />
            {this.state.orders.map((item) => this.filter(item) &&
              <OrderItem key={item.id} order={item} onComplete={(id) => this.handleComplete(id)} />) }
        </div>      
    );
  }  
}

export default Orders;
