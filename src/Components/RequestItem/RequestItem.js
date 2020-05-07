import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InfoModal from '../InfoModal/InfoModal';
import CarListItem from '../CarListItem/CarListItem';
import SupplierInfo from '../SupplierInfo/SupplierInfo';

class RequestItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCar: false,
      showSupplier: false
    };
  }

  render() {
    return (
        <div>
            <Container>
              <Row>
                  <h3>Request #1</h3>
              </Row>
              <Row className="d-flex align-items-center">
                  <Col>
                    <p className="mb-0">Amount: 25</p>
                    <p className="mb-0">Created date: 25.05.2020</p>                    
                    <p className="mb-0">Created by: Ben Kam</p>
                    <p className="mb-0">Assignee: buy manager</p>  
                  </Col>                    
                  <Col>
                    <Container>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" onClick={() => this.setState({showCar: true})}>Car</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showSupplier: true})}>Supplier</Button>
                            </Col>
                          </Row>
                    </Container>
                  </Col>                  
                  <Col>
                    <Container>
                          <Row>
                            <Col>
                                <p className="mb-0">Status: In Progress</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" block onClick={() => alert("Resolved!")}>Handle</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                                <p className="mb-0">Completed date: -</p>
                            </Col>
                          </Row>
                    </Container>                  
                  </Col>
              </Row>
            </Container>
            {this.state.showCar && <InfoModal header="Car Info" body={<CarListItem />} show={true} hide={() => this.setState({showCar: false})}/>}
            {this.state.showSupplier && <InfoModal header="Supplier Info" body={<SupplierInfo />} show={true} hide={() => this.setState({showSupplier: false})}/>}
        </div>      
    );
  }  
}

export default RequestItem;
