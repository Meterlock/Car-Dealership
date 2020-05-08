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
                <Row>
                    <Col className="pre-scrollable">
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control onChange={(e) => this.setState({firstname: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control onChange={(e) => this.setState({surname: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control onChange={(e) => this.setState({phone: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Available works</Form.Label>
                                <DropdownButton drop="down" title="Available works" onSelect={(e) => alert(e)}> {/* set max-height */}
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
                            <Toast.Header><strong className="mr-auto">300$</strong></Toast.Header>
                            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                        <Toast /*show={showA}*/ onClose={() => alert("Close")}>
                            <Toast.Header><strong className="mr-auto">300$</strong></Toast.Header>
                            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                        <Toast /*show={showA}*/ onClose={() => alert("Close")}>
                            <Toast.Header><strong className="mr-auto">300$</strong></Toast.Header>
                            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row>
                    <Col>Total: 1300$</Col>
                    <Col lg={2}>
                        <Button variant="outline-warning" size="sm" block onClick={() => alert("Submited!")}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        </div>      
    );
  }  
}

export default Service;
