import React from 'react';
import {Tab, Tabs, Spinner} from 'react-bootstrap';
import CarFilter from '../CarFilter/CarFilter';
import CarListItem from '../CarListItem/CarListItem';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: "stock",
        cars: [],
        filteredCars: [],
        isCarsLoaded: false,
        isError: false,
        configuredCar: null,
        step: true
    };
    this.cars = [];
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/CarStock",
      {
        withCredentials: true
      }
    )
    .then(response => {this.cars = response.data.data; this.setState({filteredCars: this.cars})})
    .catch(() => this.setState({isError: true}))
    .then(() => this.setState({isCarsLoaded: true}));
  }

  filterCars(filterObj) {
    let tmp = this.cars.filter(item => {
      return (filterObj.brand ? item.model.brand.id == filterObj.brand : true) &&
      (filterObj.model ? item.model.id == filterObj.model : true) &&
      (filterObj.complectation ? item.complectation.id == filterObj.complectation : true) &&
      (filterObj.body ? item.bodyType.id == filterObj.body : true) &&
      (filterObj.color ? item.color.id == filterObj.color : true) &&
      (filterObj.gearbox ? item.gearbox.id == filterObj.gearbox : true) &&
      (filterObj.petrol ? item.engine.type.id == filterObj.petrol : true);
    });
    this.setState({filteredCars: tmp});
  }

  configure(params) {
    axios.post(BASE_URL + "/api/CarStock/Create",
      {
        "modelId": parseInt(params.model),
        "bodyTypeId": parseInt(params.body),
        "colorId": parseInt(params.color),
        "engineGearboxId": parseInt(params.entra),
        "complectationId": parseInt(params.complectation)
      },
      {
        withCredentials: true
      }
    )
    .then(response => this.getCarById(response.data.data))
    .catch(() => alert("Bad request"));
  }

  getCarById(id) {
    axios.get(BASE_URL + "/api/CarStock/" + id,
      {
        withCredentials: true
      }
    )
    .then(response => this.setState({configuredCar: response.data.data, step: false}))
    .catch(() => alert("Bad request"));
  }

  render() {
    return (
        <div>
            <Tabs className="mx-3"
                activeKey={this.state.key}
                onSelect={(k) => (this.setState({key: k}))}>
                <Tab eventKey="stock" title="Cars in stock" className="mx-4">
                    <CarFilter free={true} filterFunc={(obj) => this.filterCars(obj)} />
                    {!this.state.isCarsLoaded && <Spinner animation="border" />}
                    {this.state.isError && <h3>An error with network occurred...</h3>}
                    {!this.state.isError && this.state.isCarsLoaded && 
                      this.state.filteredCars.length == 0 && <h3>No items found. Please, change the filter</h3>}
                    {this.state.isCarsLoaded && this.state.filteredCars.map((item) => <CarListItem car={item} key={item.id} />)}
                </Tab>
                <Tab eventKey="request" title="Configurate a request" className="mx-4">
                    <CarFilter free={false} configureFunc={(obj) => this.configure(obj)} />
                    {this.state.step ?
                      <h2>Waiting for configuration...</h2> :
                      <CarListItem car={this.state.configuredCar} />}
                </Tab>
            </Tabs>
        </div>      
    );
  }  
}

export default Catalog;
