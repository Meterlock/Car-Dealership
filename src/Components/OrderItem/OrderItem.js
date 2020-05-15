import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InfoModal from '../InfoModal/InfoModal';
import CarListItem from '../CarListItem/CarListItem';
import ClientInfo from '../ClientInfo/ClientInfo';

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRequest: false,
      showClient: false,
      showCar: false,
      showStatusBtn: props.order.status == "Opened" ? true : false
    };
    this.order = props.order;

  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <h4 className="mx-2">Order #{this.order.id}</h4>
              </Row>
              <Row className="d-flex align-items-center">
                  <Col>
                    <p className="mb-0">Created date: {this.order.startdate}</p>                    
                    <p className="mb-0">Created by: {this.order.creator}</p>                      
                  </Col>                    
                  <Col>
                    <Container>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showClient: true})}>Client</Button>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            <Button variant="outline-success" size="sm" block onClick={() => this.setState({showCar: true})}>Car</Button>
                            </Col>
                          </Row>
                          <Row className="mb-2">
                            <Col className="px-5 mx-5">
                            <Button variant="outline-primary" size="sm" block onClick={() => this.setState({showRequest: true})}>Request</Button>
                            </Col>
                          </Row>
                    </Container>
                  </Col>                  
                  <Col>
                    <Container>
                          <Row className="mb-1">
                            <Col className="text-center">
                              <p className="mb-0">Status: {this.order.status}</p>
                            </Col>
                          </Row>
                          <Row className="mb-1">
                            <Col className="px-5 mx-5">
                            {this.state.showStatusBtn && <Button variant="info" size="sm" block onClick={() => alert("Resolved!")}>Resolve</Button>}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-center">
                            {!this.state.showStatusBtn && <p className="mb-0">Completed date: {this.order.enddate}</p>}
                            </Col>
                          </Row>
                    </Container>                  
                  </Col>
              </Row>
            </Container>
            {this.state.showCar && <InfoModal header="Car Info" body={<CarListItem />} show={true} hide={() => this.setState({showCar: false})}/>}
            {this.state.showClient && <InfoModal header="Client Info" body={<ClientInfo />} show={true} hide={() => this.setState({showClient: false})}/>}
        </div>      
    );
  }  
}

export default OrderItem;
