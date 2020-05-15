import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import {Tab, Tabs} from 'react-bootstrap';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: "orders",
        chartData: [
          {date: "01.05", value: 5},
          {date: "02.05", value: 3},
          {date: "03.05", value: 4},
          {date: "04.05", value: 7},
          {date: "05.05", value: 8},
          {date: "06.05", value: 4},
          {date: "07.05", value: 2},
          {date: "08.05", value: 9}
        ]
    };
  }

  makeChart = (data, object) => {
      return (
          <div className="text-center">
            <ResponsiveContainer width="100%" height={350}>            
            <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="#ff007b" />
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
                    {this.makeChart(this.state.chartData, "Orders")}
                </Tab>
                <Tab eventKey="requests" title="Requests" className="mx-4 py-3">
                    {this.makeChart(this.state.chartData, "Requests")}
                </Tab>
                <Tab eventKey="workorders" title="Work orders" className="mx-4 py-3">
                    {this.makeChart(this.state.chartData, "Work orders")}
                </Tab>
            </Tabs>            
        </div>      
    );
  }  
}

export default Statistics;
