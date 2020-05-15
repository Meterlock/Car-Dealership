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
      showSupplier: false,
      showStatusBtn: props.request.btn ? true : false
    };
    this.request = props.request;
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <h4 className="mx-2">Request #{this.request.id}</h4>
              </Row>
              <Row className="d-flex align-items-center">
                  <Col>
                    <p className="mb-0">Amount: {this.request.amount}</p>
                    <p className="mb-0">Created date: {this.request.startdate}</p>                    
                    <p className="mb-0">Created by: {this.request.creator}</p>
                    <p className="mb-0">Assignee: {this.request.assignee}</p>  
                  </Col>                    
                  <Col>
                    <Container>
                          <Row className="mb-2">
                            <Col className="px-5 mx-5">
                            <Button variant="outline-success" size="sm" block onClick={() => this.setState({showCar: true})}>Car</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="px-5 mx-5">
                            <Button variant="outline-secondary" size="sm" block onClick={() => this.setState({showSupplier: true})}>Supplier</Button>
                            </Col>
                          </Row>
                    </Container>
                  </Col>                  
                  <Col>
                    <Container>
                          <Row className="mb-1">
                            <Col className="text-center">
                                <p className="mb-0">Status: {this.request.status}</p>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            {this.state.showStatusBtn && <Button variant="outline-warning" size="sm" block onClick={() => alert("Resolved!")}>{this.request.btn}</Button>}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">
                                {!this.state.showStatusBtn && <p className="mb-0">Completed date: {this.request.enddate}</p>}
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
