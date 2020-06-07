import React from 'react';
import RequestItem from '../RequestItem/RequestItem';
import OrderRequestFilter from '../OrderRequestFilter/OrderRequestFilter';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      statuses: [],
      curStatus: "",
      curSearch: ""
    };
    this.requests = [];
  }

  getRequestsByManager() {
    axios.get(BASE_URL + "/api/DeliveryRequest/ByManager/Current",
      { withCredentials: true }
    )
    .then(response => {this.requests = response.data.data; this.setState({requests: this.requests});})
    .catch((error) => alert("Bad request"));
  }

  getRequestsOpened() {
    axios.get(BASE_URL + "/api/DeliveryRequest/Opened",
      { withCredentials: true }
    )
    .then(response => {this.requests = response.data.data; this.setState({requests: this.requests});})
    .catch((error) => alert("Bad request"));
  }

  getRequestsAssigned() {
    axios.get(BASE_URL + "/api/DeliveryRequest/BySupplierManager/Current",
      { withCredentials: true }
    )
    .then(response => {this.requests = response.data.data; this.setState({requests: this.requests});})
    .catch((error) => alert("Bad request"));
  }

  getStatuses() {
    axios.get(BASE_URL + "/api/DeliveryRequestStatus",
      { withCredentials: true }
    )
    .then(response => this.setState({statuses: response.data.data}))
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }

  componentDidMount() {
    this.props.buyer ? this.filterRequests() : this.getRequestsByManager();
    this.getStatuses();
  }

  handleStatus(id) {
    let url = this.state.curStatus == 1 ? "Assign" : "Promote"
    axios.post(BASE_URL + "/api/DeliveryRequest/" + url, null,
      {
        withCredentials: true,
        params: { id: parseInt(id) }
      }
    )
    .then(() => { this.filterRequests(this.state.curStatus) })
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }

  filter(item) {
    return (this.state.curStatus ? item.status.id == this.state.curStatus : true) && 
      (item.id.toString().toLowerCase().includes(this.state.curSearch));
  }

  filterRequests(status) {
    if (this.props.buyer) {
      status == 1 ? this.getRequestsOpened() : this.getRequestsAssigned();
    }
  }

  buttonLabel(curStatus) {
    if (!this.props.buyer) return null;
    if (curStatus == 1) return "Assign";
    if (curStatus == 2) return "Process";
    if (curStatus == 3) return "Close";
    return null;
  }

  render() {
    return (
        <div>
            <OrderRequestFilter onSearch={(str) => this.setState({curSearch: str})} 
              statuses={this.state.statuses} onStatus={(id) => {this.setState({curStatus: id}); this.filterRequests(id);}} 
              switch={null} allmine={this.props.buyer} />
            {this.state.requests.map((item) => this.filter(item) &&
              <RequestItem key={item.id} request={item} status={this.buttonLabel(item.status.id)} 
                onChangeStatus={(id) => this.handleStatus(id)} hideCarBtn={this.props.buyer} />)}
        </div>
    );
  }
}

export default Requests;
