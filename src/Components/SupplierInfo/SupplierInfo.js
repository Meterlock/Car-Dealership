import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class SupplierInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Container>
                <Row>
                    <h3>Daimler Group</h3>
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Col>
                                <p>ID: 12424dsad</p>
                                <p>Address: LalaCity, Germany</p>
                            </Col>
                            <Col>
                                <p>Phone: +124234</p>
                                <p>Email: fsdf@fsdf.cdf</p>
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
