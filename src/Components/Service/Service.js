import React from 'react';
import {Form, Row, Col, Container, Button, Dropdown, DropdownButton, Toast} from 'react-bootstrap';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: "",
        surname: "",
        phone: ""
    };
  }

  render() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h4>Create new Work Order</h4>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col className="pre-scrollable">
                        <Form.Row>
                            <Form.Group as={Col} className="mb-2">
                                <Form.Label className="mb-0">Firstname</Form.Label>
                                <Form.Control onChange={(e) => this.setState({firstname: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} className="mb-2">
                                <Form.Label className="mb-0">Surname</Form.Label>
                                <Form.Control onChange={(e) => this.setState({surname: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} className="mb-2">
                                <Form.Label className="mb-0">Phone</Form.Label>
                                <Form.Control onChange={(e) => this.setState({phone: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <DropdownButton variant="info" drop="down" title="Available works" onSelect={(e) => alert(e)}> {/* set max-height */}
                                    <Form.Control placeholder="Search" /*onChange={filter array of users}*/></Form.Control>
                                    <Dropdown.Item eventKey="1">Max</Dropdown.Item>
                                    <Dropdown.Item>Ben</Dropdown.Item>
                                    <Dropdown.Item>Kirill</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                    <Col>
                        <Toast /*show={showA}*/ onClose={() => alert("Close")}>
                            <Toast.Header><strong className="mr-auto">50$</strong></Toast.Header>
                            <Toast.Body>Engine oil replacement</Toast.Body>
                        </Toast>
                        <Toast /*show={showA}*/ onClose={() => alert("Close")}>
                            <Toast.Header><strong className="mr-auto">100$</strong></Toast.Header>
                            <Toast.Body>Coolant replacement</Toast.Body>
                        </Toast>
                        <Toast /*show={showA}*/ onClose={() => alert("Close")}>
                            <Toast.Header><strong className="mr-auto">20$</strong></Toast.Header>
                            <Toast.Body>Body polishing</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row className="pb-4 d-flex align-items-center">
                    <Col lg={6} className="text-right">
                        <h5 className="mb-0">Total: 170$</h5>
                    </Col>
                    <Col lg={2}>
                        <Button variant="success" size="sm" block onClick={() => alert("Submited!")}>Submit</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>      
    );
  }  
}

export default Service;
