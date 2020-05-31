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
          {date: "08.05", value: 9},
          {date: "09.05", value: 5},
          {date: "10.05", value: 7},
          {date: "11.05", value: 8},
          {date: "12.05", value: 10},
          {date: "13.05", value: 8},
          {date: "14.05", value: 11},
          {date: "15.05", value: 5},
          {date: "16.05", value: 4},
          {date: "17.05", value: 6},
          {date: "18.05", value: 3},
          {date: "19.05", value: 4},
          {date: "20.05", value: 5},
          {date: "21.05", value: 8},
          {date: "22.05", value: 4},
          {date: "23.05", value: 8},
          {date: "24.05", value: 5},
          {date: "25.05", value: 4},
          {date: "26.05", value: 7},
          {date: "27.05", value: 8},
          {date: "28.05", value: 7},
          {date: "29.05", value: 8},
          {date: "30.05", value: 10}
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
