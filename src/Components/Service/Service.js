import React from 'react';
import {Form, Row, Col, Container, Button, Dropdown, DropdownButton, Toast} from 'react-bootstrap';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        works: [],
        selectedWorks: [],
        firstname: "",
        surname: "",
        phone: ""
    };
    this.works = [];
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/Work",
      {
        withCredentials: true
      }
    )
    .then(response => {this.works = response.data.data; this.setState({works: this.works})})
    .catch(() => alert("Bad request"));
  }

  filterWorks(search) {
    this.setState({works: this.works.filter(item => item.name.toLowerCase().includes(search))})
  }

  addWork(workId) {
      let tmp = this.state.selectedWorks;
      if (!tmp.includes(workId)){
        tmp.push(workId);
      }      
      this.setState({selectedWorks: tmp});
  }

  deleteWork(workId) {
    let tmp = this.state.selectedWorks;
    const index = tmp.indexOf(workId);
    if (index > -1) {
      tmp.splice(index, 1);
    }
    this.setState({selectedWorks: tmp});
  }

  getTotalCost() {
      let cost = 0;
      this.state.selectedWorks.forEach((item) => {
        let obj = this.works.find(work => work.id == item);
        cost += obj.price;
      });
      return cost;
  }

  checkInputs() {
        let regexPhone = /^[0-9\(\)\-\+ ]{6,}$/;
        if (this.state.firstname.trim() == "" ||
            this.state.surname.trim() == "" ||
            this.state.phone.trim() == "" ||
            !regexPhone.test(this.state.phone)) {
            return false;
        }
        return true;
  }

  createWorkOrder() {      
    if (!this.checkInputs()) {
        alert("All fields should be filled!");
        return;
    }
    if (this.state.selectedWorks.length == 0) {
        alert("No works selected!");
        return;
    }
    axios.post(BASE_URL + "/api/WorkOrder/Create",
        {
            client: {
                firstName: this.state.firstname.trim(),
                lastName: this.state.surname.trim(),
                phone: this.state.phone.trim()
            },
            worksIds: this.state.selectedWorks.map((item) => parseInt(item))
        },
        { withCredentials: true }
    )
    .then(() => {
        alert("Work Order was successfully created!"); 
        this.setState({firstname: "", surname: "", phone: "", selectedWorks: []});
    })
    .catch(() => alert("Bad request"));
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
                                <Form.Control value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} className="mb-2">
                                <Form.Label className="mb-0">Surname</Form.Label>
                                <Form.Control value={this.state.surname} onChange={(e) => this.setState({surname: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} className="mb-2">
                                <Form.Label className="mb-0">Phone</Form.Label>
                                <Form.Control value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <DropdownButton variant="info" drop="up" title="Available works" onSelect={(e) => this.addWork(e)}>
                                    <div className="ml-3 mr-1">
                                        <Form.Control placeholder="Search" onChange={(e) => this.filterWorks(e.target.value)}></Form.Control>
                                    </div>
                                    {this.state.works.map((item) => <Dropdown.Item eventKey={item.id}>{item.name}</Dropdown.Item>)}
                                </DropdownButton>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                    <Col>
                        {this.state.selectedWorks.map((item) => {
                            let obj = this.works.find(work => work.id == item);
                            return (
                                <Toast onClose={() => this.deleteWork(item)}>
                                    <Toast.Header><strong className="mr-auto">${obj.price}</strong></Toast.Header>
                                    <Toast.Body>{obj.name}</Toast.Body>
                                </Toast>
                            )
                        })}
                    </Col>
                </Row>
                <Row className="pb-4 d-flex align-items-center">
                    <Col lg={6} className="text-right">
                        <h5 className="mb-0">Total: ${this.getTotalCost()}</h5>
                    </Col>
                    <Col lg={2}>
                        <Button variant="success" size="sm" block onClick={() => this.createWorkOrder()}>Submit</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
  }  
}

export default Service;
