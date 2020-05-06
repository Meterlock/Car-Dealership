import React from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';

class OrderRequestFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col>
                        <Form.Control placeholder="Search" /*onChange={filter array of users}*/></Form.Control>
                    </Col>
                    <Col>
                        <Form.Check type="switch" id="custom-switch" label="Created by me" onChange={(e) => alert(e.target.checked)} />
                    </Col>
                    <Col>
                        <Form.Label className="mb-0">Status</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option>All</option>
                            <option>Opened</option>
                            <option>Resolved</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Container>
        </div>      
    );
  }  
}

export default OrderRequestFilter;
