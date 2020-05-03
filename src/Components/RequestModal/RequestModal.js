import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class RequestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        amount: 1
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
                    In stock delivery request
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>You are going to make a reuqest for BMW 3er Luxury</h5>
                <span className="mr-3">Enter amount of cars to request:</span>
                <input type="number" min="1" max="100" step="1" value={this.state.amount} onChange={(e) => this.setState({amount: e.target.value})}/>
            </Modal.Body>
            <Modal.Footer>
                <Button>Submit</Button>
            </Modal.Footer>
        </Modal>   
    );
  }  
}

export default RequestModal;
