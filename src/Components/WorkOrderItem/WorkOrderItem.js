import React from 'react';
import { Container, Row, Col, Button, Popover, OverlayTrigger } from 'react-bootstrap';

class WorkOrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Works:</Popover.Title>
          <Popover.Content>
              <p>item 1 - 200$</p>
              <p>item 2 - 200$</p>
              <p>item 3 - 200$</p>
          </Popover.Content>
        </Popover>
      );

    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col>
                        <h3>Work Order #228</h3>
                    </Col>
                    <Col xl={2}>
                        Total: 2000$
                    </Col>                    
                </Row>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    Created date: 12-123-3214  
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Created by: Ben Kam
                                </Col>  
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    Client name
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    +375 75 757575
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <OverlayTrigger /*trigger="click"*/ placement="right" overlay={popover}>
                                        <Button variant="success">Work list</Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                          <Row>
                            <Col>
                              <p className="mb-0">Status: Opened</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" block onClick={() => alert("Resolved!")}>Resolve</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <p className="mb-0">Completed date: -</p>
                            </Col>
                          </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>      
    );
  }  
}

export default WorkOrderItem;
