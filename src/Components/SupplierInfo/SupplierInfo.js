import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {BASE_URL} from '../../vars';

class SupplierInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
                {/* image */}
                <Row>
                    <h4 className="mx-2">{this.props.supplier.companyName}</h4>
                </Row>
                <Row className="mb-2">
                    <Col xl={2} className="d-flex align-items-center">
                        <Image src={BASE_URL + "/api/Supplier/Photo/" + this.props.supplier.photos[0]} fluid />
                    </Col>
                    <Col>
                    <Container>
                        <Row>
                            <Col>
                                <p className="mb-0">EIN: {this.props.supplier.ein}</p>
                                <p className="mb-0">Address: {this.props.supplier.address}</p>
                                <p className="mb-0">Country: {this.props.supplier.brand ? this.props.supplier.brand.country.name : ""}</p>
                            </Col>
                            <Col>
                                <p className="mb-0">Phone: {this.props.supplier.phone}</p>
                                <p className="mb-0">Email: {this.props.supplier.email}</p>
                            </Col>
                        </Row>
                    </Container>
                    </Col>
                </Row>
            </Container>
        </div>      
    );
  }  
}

export default SupplierInfo;
