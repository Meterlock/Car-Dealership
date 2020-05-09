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
        cars: [],
        isCarsLoaded: false,
        isError: false
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/CarStock")
      .then(response => this.setState({cars: response.data.data}))
      .catch(() => this.setState({isError: true}))
      .then(() => this.setState({isCarsLoaded: true}));
  }

  render() {
    return (
        <div>
            <Tabs
                activeKey={this.state.key}
                onSelect={(k) => (this.setState({key: k}))}>
                <Tab eventKey="stock" title="Cars in stock">
                    <CarFilter free={true} />
                    {!this.state.isCarsLoaded && <Spinner animation="border" />}
                    {this.state.isError && <h3>An error with network occurred...</h3>}
                    {this.state.isCarsLoaded && this.state.cars.map((item) => <CarListItem car={item} />) }
                </Tab>
                <Tab eventKey="request" title="Configurate a request">
                    <CarFilter free={false} />
                    <RequestBody />
                </Tab>
            </Tabs>
        </div>      
    );
  }  
}

export default Catalog;
