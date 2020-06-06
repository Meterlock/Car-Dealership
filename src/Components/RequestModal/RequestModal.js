import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {BASE_URL} from '../../vars';
const axios = require('axios');

class RequestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        amount: 1
    };
  }

  checkAmount() {
    let result = parseInt(this.state.amount);
    let resultFl = parseFloat(this.state.amount);
    if (isNaN(result) || result !== resultFl || result < 1 || result > 100) {
        alert("Incorrect Amount input! It should be between 1 and 100");
        return false;
    }
    return true;
  }

  submit() {
    if (!this.checkAmount()) { return; }
    axios.post(BASE_URL + "/api/DeliveryRequest/Create", null,
        { 
            withCredentials: true,
            params: { 
                CarId: parseInt(this.props.car.id),
                Amount: parseInt(this.state.amount)
            }
        }
    )
    .then(() => {
        alert("Delivery Request was successfully created!");
        this.props.hide();
    })
    .catch((error) => error.response ? alert(error.response.data.Errors[0].ErrorMessage) : alert("Bad request"));
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
                <Modal.Title id="contained-modal-title-vcenter">New Delivery Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>You are making request for {this.props.car.model.brand.name + " " 
                    + this.props.car.model.name + " " + this.props.car.complectation.name}</h5>
                <span className="mr-3">Enter amount of cars to request:</span>
                <input type="number" min="1" max="100" step="1" value={this.state.amount} onChange={(e) => this.setState({amount: e.target.value})}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => this.submit()}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
  }
}

export default RequestModal;
