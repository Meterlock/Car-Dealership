import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import {Tab, Tabs} from 'react-bootstrap';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: "orders",
        chartsData: [[], [], []]
    };
    this.data = [];
  }

  componentDidMount() {
    this.getAllStats();
  }

  getAllStats() {
    ["Order", "DeliveryRequest", "WorkOrder"].forEach((item, index) => {
      axios.get(BASE_URL + "/api/" + item + "/Statistics",
      { withCredentials: true }
      )
      .then(response =>{this.data[index] = this.formatDate(response.data.data); this.setState({chartsData: this.data});})
      .catch((error) => alert("Bad request"));
    });
  }

  formatDate(arr) {
    let tmp = arr;
    tmp.forEach((item) => {
      let date = new Date(Date.parse(item.date));
      let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
      item.date = day + "." + month;
    });
    return tmp;
  }

  makeChart = (data, object) => {
      return (
          <div className="text-center">
            <ResponsiveContainer width="100%" height={350}>            
            <LineChart data={data}>
                <Line type="monotone" dataKey="count" stroke="#ff007b" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
            <h4 className="mt-2">{object} per month</h4>
          </div>        
      );
  }

  render() {
    return (
        <div>
            <Tabs className="mx-3"
                activeKey={this.state.key}
                onSelect={(k) => (this.setState({key: k}))}>
                <Tab eventKey="orders" title="Orders" className="mx-4 py-3">
                    {this.makeChart(this.state.chartsData[0], "Orders")}
                </Tab>
                <Tab eventKey="requests" title="Requests" className="mx-4 py-3">
                    {this.makeChart(this.state.chartsData[1], "Delivery Requests")}
                </Tab>
                <Tab eventKey="workorders" title="Work Orders" className="mx-4 py-3">
                    {this.makeChart(this.state.chartsData[2], "Work Orders")}
                </Tab>
            </Tabs>            
        </div>      
    );
  }  
}

export default Statistics;
