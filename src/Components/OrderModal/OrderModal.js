import React from 'react';
import {Modal, Button, Tabs, Tab, Form, Col, Dropdown, DropdownButton} from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class OrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clients: [],
        key: "new",
        firstname: "",
        surname: "",
        birthdate: new Date(),
        sex: true,
        passport: "",
        address: "",
        email: "",
        phone: "",
        chosenClient: ""
    };
    this.clients = [];
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/Client",
    {
      withCredentials: true
    }
  )
  .then(response => {this.clients = response.data.data; this.setState({clients: this.clients})})
  .catch(() => alert("Bad request"));
  }

  filterClients(search) {
    this.setState({clients: this.clients.filter(item => 
        (item.firstName + item.lastName + item.passportId).toLowerCase().includes(search))});
  }

  checkInputs() {
    let regexPhone = /^[0-9\(\)\-\+ ]{6,}$/;
    let regexEmail = /(\w+(\.\w+)?)(\+\w+)?@(\w+\.)+\w+$/;
    if (this.state.firstname.trim() == "" ||
        this.state.surname.trim() == "" ||
        this.state.phone.trim() == "" ||
        this.state.passport.trim() == "" ||
        this.state.passport.length < 10 ||
        this.state.address.trim() == "" ||
        this.state.email.trim() == "" ||
        !regexEmail.test(this.state.email) ||
        !regexPhone.test(this.state.phone)) {
        return false;
    }
    return true;
  }

  onSubmitNew() {
    if (!this.checkInputs()) {
        alert("All fields should be filled!");
        return;
    }
    axios.post(BASE_URL + "/api/Client/Create",
        {
            "firstName": this.state.firstname.trim(),
            "lastName": this.state.surname.trim(),
            "email": this.state.email.trim(),
            "passportId": this.state.passport.trim(),
            "phone": this.state.phone.trim(),
            "isMale": this.state.sex,
            "birthday": new Date(Date.UTC(this.state.birthdate.getFullYear(), 
                this.state.birthdate.getMonth(), this.state.birthdate.getDate())).toISOString(),
            "address": this.state.address
        },
        { withCredentials: true }
    )
    .then((response) => {
        this.createOrder(response.data.data)
    })
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }

  createOrder(clientId) {
    let url = this.props.config ? "/WithDeliveryRequest" : "";
    axios.post(BASE_URL + "/api/Order/Create" + url, null,
        { 
            withCredentials: true,
            params: { 
                CarId: parseInt(this.props.car),
                ClientId: parseInt(clientId)
            }
        }
    )
    .then(() => {
        alert("Order was successfully created!");
        this.props.hide();
    })
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
  }  

  clientTitle() {
      let client = this.clients.find(item => item.id == this.state.chosenClient);
      return client ? " for " + client.firstName + " " + client.lastName + " / " + client.passportId : null;
  }

  onSubmitExist() {
    if (!this.state.chosenClient) {
        alert("No client chosen! Please, select one");
        return;
    }
    this.createOrder(this.state.chosenClient);
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
                <Modal.Title id="contained-modal-title-vcenter">New Order<br/>{this.clientTitle()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs
                    activeKey={this.state.key}
                    onSelect={(k) => (this.setState({key: k}))}>
                <Tab eventKey="new" title="New client">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label className="mb-0">Firstname</Form.Label>
                            <Form.Control onChange={(e) => this.setState({firstname: e.target.value})}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="mb-0">Surname</Form.Label>
                            <Form.Control onChange={(e) => this.setState({surname: e.target.value})}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label className="mb-0">Sex</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({sex: e.target.value})}>
                                <option value={true}>Male</option>
                                <option value={false}>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="mb-0">Passport №</Form.Label>
                            <Form.Control onChange={(e) => this.setState({passport: e.target.value})}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Birth date</Form.Label><br></br>
                            <DatePicker clearIcon={null} value={this.state.birthdate} onChange={(date) => this.setState({birthdate: date})} />
                        </Form.Group>     
                        <Form.Group as={Col}>
                            <Form.Label className="mb-0">Address</Form.Label>
                            <Form.Control onChange={(e) => this.setState({address: e.target.value})}/>
                        </Form.Group>                  
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label className="mb-0">Email</Form.Label>
                            <Form.Control type="email" onChange={(e) => this.setState({email: e.target.value})}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="mb-0">Phone</Form.Label>
                            <Form.Control type="phone" onChange={(e) => this.setState({phone: e.target.value})}/>
                        </Form.Group>
                    </Form.Row>
                </Tab>
                <Tab eventKey="exist" title="Existing client">
                    <Form.Row className="mt-5">
                        <Form.Group as={Col}>
                            <h3>Choose client:</h3>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <DropdownButton drop="down" title="Our Clients" onSelect={(e) => this.setState({chosenClient: e})}>
                                <div className="ml-3 mr-1">
                                    <Form.Control placeholder="Search" onChange={(e) => this.filterClients(e.target.value)}></Form.Control>
                                </div>
                                {this.state.clients.map((item) => <Dropdown.Item eventKey={item.id}>
                                    {item.firstName + " " + item.lastName + " / " + item.passportId}</Dropdown.Item>)}
                            </DropdownButton>
                        </Form.Group>
                    </Form.Row>                
                </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => this.state.key === "new" ? this.onSubmitNew() : this.onSubmitExist()}>Submit</Button>
            </Modal.Footer>
        </Modal>   
    );
  }  
}

export default OrderModal;
