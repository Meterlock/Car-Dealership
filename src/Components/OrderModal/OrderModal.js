import React from 'react';
import {Modal, Button, Tabs, Tab, Form, Col} from 'react-bootstrap';
import DatePicker from 'react-date-picker';

class OrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: "new",
        firstname: "",
        surname: "",
        birthdate: new Date(),
        sex: "",
        passport: "",
        address: "",
        email: "",
        phone: ""
    };
  }

  render() {
    return (        
        <Modal
            show={this.props.show}
            onHide={this.props.hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs
                    activeKey={this.state.key}
                    onSelect={(k) => (this.setState({key: k}))}>
                <Tab eventKey="new" title="New client">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control onChange={(e) => this.setState({firstname: e.target.value})}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control onChange={(e) => this.setState({surname: e.target.value})}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Sex</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({sex: e.target.value})}>
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Passport №</Form.Label>
                            <Form.Control onChange={(e) => this.setState({passport: e.target.value})}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Birth date</Form.Label><br></br>
                            <DatePicker value={this.state.birthdate} onChange={(date) => this.setState({birthdate: date})} />
                        </Form.Group>     
                        <Form.Group as={Col}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={(e) => this.setState({address: e.target.value})}/>
                        </Form.Group>                  
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(e) => this.setState({email: e.target.value})}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" onChange={(e) => this.setState({phone: e.target.value})}/>
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={() => alert(this.state.birthdate)}>ccc</Button>
                </Tab>
                <Tab eventKey="exist" title="Existing client">
                </Tab>
            </Tabs>
            </Modal.Body>
            {/*<Modal.Footer>
                <Button>Submit</Button>
            </Modal.Footer>*/}
        </Modal>   
    );
  }  
}

export default OrderModal;
