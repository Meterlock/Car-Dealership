import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class CarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
                      <Col>BMW 3er Luxury</Col>
                      <Col xl={1}>31000$</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Container>
                          <Row>
                            <Col xl={4}>Volume: 2500 cm3</Col>
                            <Col>Gearbox: Manual</Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Petrol: Diesel</Col>
                            <Col>Body: Sedan</Col>
                          </Row>
                          <Row>
                            <Col xl={4}>Power: 250hp</Col>
                            <Col>Color: Red</Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col xl={3}>
                        <Container>
                          <Row>
                            <Col>
                              <Button variant="info" size="sm" block className="mb-1">Order</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" block>Request</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>Amount: 10</Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Supplier: BMW AG, Munich, Germany</Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
        </div>      
    );
  }  
}

export default CarList;
