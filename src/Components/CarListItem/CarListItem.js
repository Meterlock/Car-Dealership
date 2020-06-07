import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import RequestModal from '../RequestModal/RequestModal';
import OrderModal from '../OrderModal/OrderModal';
import {BASE_URL} from '../../vars';

class CarListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRequestModal: false,
      showOrderModal: false
    };
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <Col className="d-flex align-items-center">
                  <Image src={BASE_URL + `/api/CarStock/Photo/Main/${this.props.car.model.id}_${this.props.car.color.id}_${this.props.car.bodyType.id}`} fluid />
                </Col>
                <Col xl={10}>
                  <Container>
                    <Row>
                      <Col>
                        <Container>
                          <Row>
                            <Col className="px-0">
                              <h5>{this.props.car.model.brand.name + " " + this.props.car.model.name + " " + this.props.car.complectation.name}</h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Volume: {this.props.car.engine.volume}L</Col>
                            <Col>Gearbox: {this.props.car.gearbox.name}</Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Petrol: {this.props.car.engine.type.name}</Col>
                            <Col>Body: {this.props.car.bodyType.name}</Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Power: {this.props.car.engine.power}hp</Col>
                            <Col>Color: {this.props.car.color.name}</Col>
                          </Row>
                          <Row>
                            <Col className="px-0">Supplier: {this.props.car.model.brand.country.name}</Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col xl={3} className="d-flex align-items-center">
                        <Container className="px-4">
                          <Row className="mb-1">
                            <Col className="text-center">${this.props.car.price}</Col>
                          </Row>
                          <Row className="mb-2">
                            <Col>
                              {!this.props.hideCarBtn ?
                                <Button variant="info" size="sm" block onClick={() => this.setState({showOrderModal: true})}>Order</Button>
                                : null}
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col>
                              {!this.props.hideCarBtn ?
                                <Button variant="success" size="sm" block onClick={() => this.setState({showRequestModal: true})}>Request</Button>
                                : null}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">Amount: {this.props.car.amount}</Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
            {this.state.showRequestModal && <RequestModal car={this.props.car} show={true} hide={() => this.setState({showRequestModal: false})}/>}
            {this.state.showOrderModal && <OrderModal config={this.props.config} car={this.props.car.id} show={true} hide={() => this.setState({showOrderModal: false})}/>}
        </div>      
    );
  }  
}

export default CarListItem;
