import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
            <Container>
              <Row>
                <Col>{/*photo place*/}</Col>
                <Col xl={10}>
                  <Container>
                    <Row>
                      <Col>{this.car.model.brand.name + " " + this.car.model.name}</Col>
                      <Col xl={2}>${this.car.price}</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Container>
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
                        </Container>
                      </Col>
                      <Col xl={3}>
                        <Container>
                          <Row>
                            <Col>
                              <Button variant="info" size="sm" block className="mb-1" onClick={() => this.setState({showOrderModal: true})}>Order</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showRequestModal: true})}>Request</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>Amount: {this.car.amount}</Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Supplier: {this.car.model.brand.country.name}</Col>
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
