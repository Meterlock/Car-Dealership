import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import RequestModal from '../RequestModal/RequestModal';
import OrderModal from '../OrderModal/OrderModal';

class CarListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRequestModal: false,
      showOrderModal: false
    };
    this.car = props.car;
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <Col className="d-flex align-items-center">
                  <Image src={this.car.image} fluid />
                </Col>
                <Col xl={10}>
                  <Container>
                    <Row>
                      <Col>
                        <Container>
                          <Row>
                            <Col className="px-0">
                              <h5>{this.car.model.brand.name + " " + this.car.model.name}</h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Volume: {this.car.engine.volume}L</Col>
                            <Col>Gearbox: {this.car.gearbox.name}</Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Petrol: {this.car.engine.type.name}</Col>
                            <Col>Body: {this.car.bodyType.name}</Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Power: {this.car.engine.power}hp</Col>
                            <Col>Color: {this.car.color.name}</Col>
                          </Row>
                          <Row>
                            <Col className="px-0">Supplier: {this.car.model.brand.country.name}</Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col xl={3} className="d-flex align-items-center">
                        <Container className="px-4">
                          <Row className="mb-1">
                            <Col className="text-center">${this.car.price}</Col>
                          </Row>
                          <Row className="mb-2">
                            <Col>
                              <Button variant="info" size="sm" block onClick={() => this.setState({showOrderModal: true})}>Order</Button>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col>
                            <Button variant="success" size="sm" block onClick={() => this.setState({showRequestModal: true})}>Request</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">Amount: {this.car.amount}</Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
            {this.state.showRequestModal && <RequestModal show={true} hide={() => this.setState({showRequestModal: false})}/>}
            {this.state.showOrderModal && <OrderModal show={true} hide={() => this.setState({showOrderModal: false})}/>}
        </div>      
    );
  }  
}

export default CarListItem;
