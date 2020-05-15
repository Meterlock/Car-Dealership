import React from 'react';
import { Container, Row, Col, Button, Popover, OverlayTrigger } from 'react-bootstrap';

class WorkOrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showStatusBtn: props.workorder.status == "In progress" ? true : false
    };
    this.workorder = props.workorder;
  }

  render() {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Works:</Popover.Title>
          <Popover.Content>
              <p className="my-0">1. Engine oil replacement - 50$</p>
              <p className="my-0">2. Coolant replacement - 100$</p>
              <p className="my-0">3. Body polishing - 20$</p>
          </Popover.Content>
        </Popover>
      );

    return (
        <div>
            <Container className="border border-secondary mb-1">
                <Row className="d-flex align-items-center">
                    <Col className="px-0">
                        <h4 className="mx-2">Work Order #{this.workorder.id}</h4>
                    </Col>
                    <Col className="text-right">
                        Total: ${this.workorder.total}
                    </Col>                    
                </Row>
                <Row className="d-flex align-items-center">
                    <Col>
                        <p className="mb-0">Created date: {this.workorder.startdate}</p>                    
                        <p className="mb-0">Created by: {this.workorder.creator}</p>  
                    </Col>
                    <Col>
                        <Container>
                            <Row className="mb-1">
                                <Col className="text-center">
                                    <p className="mb-0">Client: {this.workorder.client}</p>                    
                                    <p className="mb-0">Phone: {this.workorder.phone}</p>
                                </Col>                                  
                            </Row>
                            <Row className="mb-2">
                                <Col className="px-5 mx-5">
                                    <OverlayTrigger /*trigger="click"*/ placement="right" overlay={popover}>
                                        <Button variant="outline-success" block>Work list</Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                          <Row className="mb-1">
                            <Col className="text-center">
                              <p className="mb-0">Status: {this.workorder.status}</p>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            {this.state.showStatusBtn && <Button variant="info" size="sm" block onClick={() => alert("Resolved!")}>Resolve</Button>}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">
                            {!this.state.showStatusBtn && <p className="mb-0">Completed date: {this.workorder.enddate}</p>}
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
