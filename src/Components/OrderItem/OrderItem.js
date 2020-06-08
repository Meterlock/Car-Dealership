import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InfoModal from '../InfoModal/InfoModal';
import CarListItem from '../CarListItem/CarListItem';
import ClientInfo from '../ClientInfo/ClientInfo';
import RequestItem from '../RequestItem/RequestItem';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRequest: false,
      showClient: false,
      showCar: false,
      car: new Object(),
      request: new Object()
    };
  }

  getCar() {
    axios.get(BASE_URL + "/api/CarStock/" + this.props.order.carId,
        { 
            withCredentials: true
        }
    )
    .then((response) => {
      this.setState({car: response.data.data, showCar: true});
    })
    .catch((error) => alert("Bad request"));
  }

  getRequest() {
    axios.get(BASE_URL + "/api/DeliveryRequest/" + this.props.order.deliveryRequestId,
        { 
            withCredentials: true
        }
    )
    .then((response) => {
      this.setState({request: response.data.data, showRequest: true});
    })
    .catch((error) => alert("Bad request"));
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <h4 className="mx-2">Order №{this.props.order.id}</h4>
              </Row>
              <Row className="d-flex align-items-center">
                  <Col>
                    <p className="mb-0">Created date: {new Date(Date.parse(this.props.order.createDate)).toLocaleDateString()}</p>                    
                    <p className="mb-0">Created by: {this.props.order.manager.firstName + " " + this.props.order.manager.lastName}</p>                      
                  </Col>                    
                  <Col>
                    <Container>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showClient: true})}>Client</Button>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            <Button variant="outline-success" size="sm" block onClick={() => this.getCar()}>Car</Button>
                            </Col>
                          </Row>                          
                          <Row className="mb-2">
                            <Col className="px-5 mx-5">
                            {this.props.order.deliveryRequestId ? (this.props.id == this.props.order.manager.id) &&
                              <Button variant="outline-primary" size="sm" block onClick={() => this.getRequest()}>Request</Button> : null}
                            </Col>
                          </Row>
                    </Container>
                  </Col>                  
                  <Col>
                    <Container>
                          <Row className="mb-1">
                            <Col className="text-center">
                              <p className="mb-0">Status: {this.props.order.status.name}</p>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            {this.props.order.canPromote && (this.props.id == this.props.order.manager.id) && 
                              <Button variant="info" size="sm" block onClick={() => this.props.onComplete(this.props.order.id)}>Complete</Button>}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">
                            {(this.props.order.status.id == 2) &&
                              <p className="mb-0">Completed date: {new Date(Date.parse(this.props.order.completedDate)).toLocaleDateString()}</p>}
                            </Col>
                          </Row>
                    </Container>                  
                  </Col>
              </Row>
            </Container>
            {this.state.showCar && <InfoModal header="Car Info" body={<CarListItem config={false} car={this.state.car} />} 
              show={true} hide={() => this.setState({showCar: false})}/>}
            {this.state.showClient && <InfoModal header="Client Info" body={<ClientInfo client={this.props.order.clientId} />} 
              show={true} hide={() => this.setState({showClient: false})}/>}
            {this.state.showRequest && <InfoModal header="Delivery Request Info" body={<RequestItem request={this.state.request} status={null} onChangeStatus={null} />} 
              show={true} hide={() => this.setState({showRequest: false})}/>}
        </div>      
    );
  }  
}

export default OrderItem;
