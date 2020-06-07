import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InfoModal from '../InfoModal/InfoModal';
import CarListItem from '../CarListItem/CarListItem';
import SupplierInfo from '../SupplierInfo/SupplierInfo';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class RequestItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCar: false,
      showSupplier: false,
      car: new Object(),
      supplier: new Object()
    };
  }

  getCar() {
    axios.get(BASE_URL + "/api/CarStock/" + this.props.request.carId,
        { 
            withCredentials: true
        }
    )
    .then((response) => {
      this.setState({car: response.data.data, showCar: true});
    })
    .catch((error) => alert("Bad request"));
  }

  getSupplier() {
    axios.get(BASE_URL + "/api/Supplier/" + this.props.request.supplierId,
        { 
            withCredentials: true
        }
    )
    .then((response) => {
      this.setState({supplier: response.data.data, showSupplier: true});
    })
    .catch((error) => alert("Bad request"));
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <h4 className="mx-2">Request №{this.props.request.id}</h4>
              </Row>
              <Row className="d-flex align-items-center">
                  <Col>
                    <p className="mb-0">Requested amount: {this.props.request.amount}</p>
                    <p className="mb-0">Created date: {new Date(Date.parse(this.props.request.createDate)).toLocaleDateString()}</p>                    
                    <p className="mb-0">Created by: {this.props.request.manager ? 
                      this.props.request.manager.firstName + " " + this.props.request.manager.lastName : ""}</p>
                    <p className="mb-0">Assignee: {this.props.request.supplierManager ? 
                      this.props.request.supplierManager.firstName + " " + this.props.request.supplierManager.lastName : ""}</p>  
                  </Col>                    
                  <Col>
                    <Container>
                          <Row className="mb-2">
                            <Col className="px-5 mx-5">
                            <Button variant="outline-success" size="sm" block onClick={() => this.getCar()}>Car</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="px-5 mx-5">
                            <Button variant="outline-secondary" size="sm" block onClick={() => this.getSupplier()}>Supplier</Button>
                            </Col>
                          </Row>
                    </Container>
                  </Col>                  
                  <Col>
                    <Container>
                          <Row className="mb-1">
                            <Col className="text-center">
                                <p className="mb-0">Status: {this.props.request.status.name}</p>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            {this.props.status && <Button variant="outline-warning" size="sm" block 
                              onClick={() => this.props.onChangeStatus(this.props.request.id)}>{this.props.status}</Button>}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">
                                {this.props.request.completedDate && <p className="mb-0">Completed date: {new Date(Date.parse(this.props.request.completedDate)).toLocaleDateString()}</p>}
                            </Col>
                          </Row>
                    </Container>                  
                  </Col>
              </Row>
            </Container>
            {this.state.showCar && <InfoModal header="Car Info" body={<CarListItem config={false} car={this.state.car} hideCarBtn={this.props.hideCarBtn} />} 
              show={true} hide={() => this.setState({showCar: false})}/>}
            {this.state.showSupplier && <InfoModal header="Supplier Info" body={<SupplierInfo supplier={this.state.supplier} />} 
              show={true} hide={() => this.setState({showSupplier: false})}/>}
        </div>      
    );
  }  
}

export default RequestItem;
