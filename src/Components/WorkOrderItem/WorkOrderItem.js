import React from 'react';
import { Container, Row, Col, Button, Popover, OverlayTrigger } from 'react-bootstrap';

class WorkOrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderPopover(works) {
    return (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Works:</Popover.Title>
        <Popover.Content>
          {works.map((item, index) => 
            <p className="my-0" key={index}>{`${index + 1}) ${item.name} - $${item.price}`}</p>
          )}
        </Popover.Content>
      </Popover>
    );
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
                <Row className="d-flex align-items-center">
                    <Col className="px-0">
                        <h4 className="mx-2">Work Order №{this.props.workorder.id}</h4>
                    </Col>
                    <Col className="text-right">
                        Total: ${this.props.workorder.totalPrice}
                    </Col>                    
                </Row>
                <Row className="d-flex align-items-center">
                    <Col>
                        <p className="mb-0">Created date: {new Date(Date.parse(this.props.workorder.createdDate)).toLocaleDateString()}</p>                    
                        <p className="mb-0">Created by: {this.props.workorder.worker.firstName + " " + this.props.workorder.worker.lastName}</p>  
                    </Col>
                    <Col>
                        <Container>
                            <Row className="mb-1">
                                <Col className="text-center">
                                    <p className="mb-0">Client: {this.props.workorder.client.firstName + " " + this.props.workorder.client.lastName}</p>                    
                                    <p className="mb-0">Phone: {this.props.workorder.client.phone}</p>
                                </Col>                                  
                            </Row>
                            <Row className="mb-2">
                                <Col className="px-5 mx-5">
                                    <OverlayTrigger /*trigger="click"*/ placement="right" overlay={this.renderPopover(this.props.workorder.works)}>
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
                              <p className="mb-0">Status: {this.props.workorder.status.name}</p>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            {this.props.status && (this.props.id == this.props.workorder.worker.id) && <Button variant="info" size="sm" block 
                              onClick={() => this.props.onComplete(this.props.workorder.id)}>Complete</Button>}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">
                            {!this.props.status && <p className="mb-0">Completed date: {new Date(Date.parse(this.props.workorder.completedDate)).toLocaleDateString()}</p>}
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
