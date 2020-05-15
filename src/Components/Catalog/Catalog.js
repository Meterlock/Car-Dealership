import React from 'react';
import {Tab, Tabs, Spinner} from 'react-bootstrap';
import CarFilter from '../CarFilter/CarFilter';
import CarListItem from '../CarListItem/CarListItem';
import RequestBody from '../RequestBody/RequestBody';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: "stock",
        cars: [
          {
            model: {
              brand: {
                name: "BMW",
                country: {
                  name: "BMW Group, Germany"
                }
              },
              name: "3er"
            },
            price: "45000",
            engine: {
              volume: "2.0",
              type: {
                name: "Diesel"
              },
              power: "184"
            },
            gearbox: {
              name: "Automatic"
            },
            bodyType: {
              name: "Sedan"
            },
            color: {
              name: "Blue"
            },
            amount: "15",
            image: "bmwg20.jpg"
          },
          {
            model: {
              brand: {
                name: "Porsche",
                country: {
                  name: "Porsche, Germany"
                }
              },
              name: "Macan"
            },
            price: "80000",
            engine: {
              volume: "3.0",
              type: {
                name: "Diesel"
              },
              power: "240"
            },
            gearbox: {
              name: "Automatic"
            },
            bodyType: {
              name: "SUV"
            },
            color: {
              name: "Red"
            },
            amount: "4",
            image: "pmacan.jpg"
          }
        ],
        isCarsLoaded: true,
        isError: false
    };
  }

  /*componentDidMount() {
    axios.get(BASE_URL + "/api/CarStock")
      .then(response => this.setState({cars: response.data.data}))
      .catch(() => this.setState({isError: true}))
      .then(() => this.setState({isCarsLoaded: true}));
  }*/

  render() {
    return (
        <div>
            <Tabs className="mx-3"
                activeKey={this.state.key}
                onSelect={(k) => (this.setState({key: k}))}>
                <Tab eventKey="stock" title="Cars in stock" className="mx-4">
                    <CarFilter free={true} />
                    {!this.state.isCarsLoaded && <Spinner animation="border" />}
                    {this.state.isError && <h3>An error with network occurred...</h3>}
                    {this.state.isCarsLoaded && this.state.cars.map((item) => <CarListItem car={item} />)}
                </Tab>
                <Tab eventKey="request" title="Configurate a request" className="mx-4">
                    <CarFilter free={false} />
                    <RequestBody />
                </Tab>
            </Tabs>
        </div>      
    );
  }  
}

export default Catalog;
