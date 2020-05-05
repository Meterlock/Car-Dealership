import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class InfoModal extends React.Component {
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
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.props.body}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.hide}>Close</Button>
            </Modal.Footer>
        </Modal>   
    );
  }  
}

export default InfoModal;
