import React from 'react';
import {Form, Col} from 'react-bootstrap';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class CarFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        brands: [],
        models: [],
        complectations: [],
        bodies: [],
        colors: [],
        gearboxes: [],
        petrols: [],
        entras: []
    };
    this.brand = "";
    this.model = "";
    this.complectation = "";
    this.body = "";
    this.color = "";
    this.gearbox = "";
    this.petrol = "";
    this.entra = "";
  }

  componentDidMount() {
    this.getBrands();
    if (this.props.free) {
        this.getAllBodyTypes();
        this.getAllColors();
        this.getAllGearboxes();
        this.getAllPetrols();
    }    
  }

  getBrands() {
    var result = true;
    axios.get(BASE_URL + "/api/Brand",
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({brands: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getModels(brandId) {
    var result = true;
    axios.get(BASE_URL + "/api/CarModel/ByBrand/" + brandId,
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({models: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getComplectations(modelId) {
    var result = true;
    axios.get(BASE_URL + "/api/CarComplectation/ByModel/" + modelId,
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({complectations: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getAllBodyTypes() {
    var result = true;
    axios.get(BASE_URL + "/api/CarBodyType",
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({bodies: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getAllColors() {
    var result = true;
    axios.get(BASE_URL + "/api/CarBodyColor",
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({colors: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getAllGearboxes() {
    var result = true;
    axios.get(BASE_URL + "/api/Gearbox",
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({gearboxes: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getAllPetrols() {
    var result = true;
    axios.get(BASE_URL + "/api/CarEngineType",
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({petrols: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getBodyByModel(modelId) {
    var result = true;
    axios.get(BASE_URL + "/api/CarBodyType/ByModel/" + modelId,
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({bodies: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getColorByModel(modelId) {
    var result = true;
    axios.get(BASE_URL + "/api/CarBodyColor/ByModel/" + modelId,
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({colors: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  getEntraByModel(modelId) {
    var result = true;
    axios.get(BASE_URL + "/api/CarEngine/ByModel/" + modelId,
        {
            withCredentials: true
        }
    )
    .then(response => this.setState({entras: response.data.data}))
    .catch(() => result = false);
    return result;
  }

  updateFilter() {
      let filter = {
          brand: this.brand,
          model: this.model,
          complectation: this.complectation,
          body: this.body,
          color: this.color,
          gearbox: this.gearbox,
          petrol: this.petrol
      }
      this.props.filterFunc(filter);
  }

  configureCar() {
      if (!(this.complectation && this.body && this.color && this.entra)) return;
      let params = {
          model: this.model,
          complectation: this.complectation,
          body: this.body,
          color: this.color,
          entra: this.entra
      }
      this.props.configureFunc(params);
  }

  chooseBrand(value) {
    this.setState({models: [], complectations: []});
    this.brand = value;
    this.model = "";
    this.complectation = "";
    if (!this.props.free) {
        this.setState({bodies: [], colors: [], entras: []});
        this.body = "";
        this.color = "";
        this.entra = "";
    } else {
        this.updateFilter();
    }
    if (value) {
        this.getModels(value);
    }
  }

  chooseModel(value) {
    this.setState({complectations: []});
    this.model = value;
    this.complectation = "";
    if (!this.props.free) {
        this.setState({bodies: [], colors: [], entras: []});
        this.body = "";
        this.color = "";
        this.entra = "";
    } else {
        this.updateFilter();
    }
    if (value) {
        this.getComplectations(value);
        if (!this.props.free) {
            this.getBodyByModel(value);
            this.getColorByModel(value);
            this.getEntraByModel(value);
        }
    }    
  }

  chooseComplectation(value) {
      this.complectation = value;
      this.props.free ? this.updateFilter() : this.configureCar();
  }

  chooseBody(value) {
      this.body = value;
      this.props.free ? this.updateFilter() : this.configureCar();
  }

  chooseColor(value) {
    this.color = value;
    this.props.free ? this.updateFilter() : this.configureCar();
  }

  chooseGearbox(value) {
    this.gearbox = value;
    this.updateFilter();
  }

  choosePetrol(value) {
    this.petrol = value;
    this.updateFilter();
  }

  chooseEntra(value) {
      this.entra = value;
      this.configureCar();
  }

  render() {
    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="brand" className="mb-2">
                        <Form.Label className="mb-0">Brand</Form.Label>
                        <Form.Control as="select" onChange={(e) => this.chooseBrand(e.target.value)}>
                            <option value=""></option>
                            {this.state.brands.map((item) => <option value={item.id}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="model" className="mb-2">
                        <Form.Label className="mb-0">Model</Form.Label>
                        <Form.Control as="select" disabled={!this.brand} onChange={(e) => this.chooseModel(e.target.value)}>
                            <option value=""></option>
                            {this.state.models.map((item) => <option value={item.id}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="complectation" className="mb-2">
                        <Form.Label className="mb-0">Complectation</Form.Label>
                        <Form.Control as="select" disabled={!this.model} onChange={(e) => this.chooseComplectation(e.target.value)}>
                            <option value=""></option>
                            {this.state.complectations.map((item) => <option value={item.id}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="bodytype">
                        <Form.Label className="mb-0">Body type</Form.Label>
                        <Form.Control as="select" disabled={!this.model && !this.props.free} onChange={(e) => this.chooseBody(e.target.value)}>
                            <option value=""></option>
                            {this.state.bodies.map((item) => <option value={item.id}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="color">
                        <Form.Label className="mb-0">Color</Form.Label>
                        <Form.Control as="select" disabled={!this.model && !this.props.free} onChange={(e) => this.chooseColor(e.target.value)}>
                            <option value=""></option>
                            {this.state.colors.map((item) => <option value={item.id}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>
                    {this.props.free &&
                    <Form.Group as={Col} controlId="gearbox">
                        <Form.Label className="mb-0">Gearbox</Form.Label>
                        <Form.Control as="select" onChange={(e) => this.chooseGearbox(e.target.value)}>
                            <option value=""></option>
                            {this.state.gearboxes.map((item) => <option value={item.id}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>}
                    {this.props.free &&
                    <Form.Group as={Col} controlId="petrol">
                        <Form.Label className="mb-0">Petrol</Form.Label>
                        <Form.Control as="select" onChange={(e) => this.choosePetrol(e.target.value)}>
                            <option value=""></option>
                            {this.state.petrols.map((item) => <option value={item.id}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>}
                    {!this.props.free &&
                    <Form.Group as={Col} controlId="enginegearbox">
                        <Form.Label className="mb-0">Engine & transmission</Form.Label>
                        <Form.Control as="select" disabled={!this.model && !this.props.free} onChange={(e) => this.chooseEntra(e.target.value)}>
                            <option value=""></option>
                            {this.state.entras.map((item) => <option value={item.id}>
                                {item.engine.volume + "L / " + item.engine.power + "hp " + item.engine.type.name + " " + item.gearbox.name}
                            </option>)}
                        </Form.Control>
                    </Form.Group>}                    
                </Form.Row>
            </Form>
        </div>      
    );
  }  
}

export default CarFilter;
