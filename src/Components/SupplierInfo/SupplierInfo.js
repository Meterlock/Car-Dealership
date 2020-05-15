import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class SupplierInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.supplier = props.supplier;
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
                {/* image */}
                <Row>
                    <h4 className="mx-2">{this.supplier.name}</h4>
                </Row>
                <Row className="mb-2">
                    <Container>
                        <Row>
                            <Col>
                                <p className="mb-0">ID: {this.supplier.idn}</p>
                                <p className="mb-0">Address: {this.supplier.address}</p>
                            </Col>
                            <Col>
                                <p className="mb-0">Phone: {this.supplier.phone}</p>
                                <p className="mb-0">Email: {this.supplier.email}</p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>      
    );
  }  
}

export default SupplierInfo;
