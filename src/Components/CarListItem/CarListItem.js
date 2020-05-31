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
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <Col className="d-flex align-items-center">
                  <Image src={this.props.car.image} fluid />
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
                              <Button variant="info" size="sm" block onClick={() => this.setState({showOrderModal: true})}>Order</Button>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col>
                            <Button variant="success" size="sm" block onClick={() => this.setState({showRequestModal: true})}>Request</Button>
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
            {this.state.showRequestModal && <RequestModal show={true} hide={() => this.setState({showRequestModal: false})}/>}
            {this.state.showOrderModal && <OrderModal show={true} hide={() => this.setState({showOrderModal: false})}/>}
        </div>      
    );
  }  
}

export default CarListItem;
