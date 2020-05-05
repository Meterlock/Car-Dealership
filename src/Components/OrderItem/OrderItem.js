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
      showCar: false
    };
  }

  render() {
    return (
        <div>
            <Container>
              <Row>
                  <h3>Order #1</h3>
              </Row>
              <Row className="d-flex align-items-center">
                  <Col>
                    <p className="mb-0">Created date: 25.05.2020</p>
                    <p className="mb-0">Completed date: -</p>
                    <p className="mb-0">Created by: Ben Kam</p>
                    <p className="mb-0">Status: Opened</p>  
                  </Col>                    
                  <Col>
                    <Container>
                          <Row>
                            <Col>
                            <Button variant="info" size="sm" className="mb-1" onClick={() => this.setState({showClient: true})}>Client</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" onClick={() => this.setState({showCar: true})}>Car</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                            <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showRequest: true})}>Request</Button>
                            </Col>
                          </Row>
                    </Container>
                  </Col>                  
                  <Col>
                  <Button variant="outline-warning" size="sm" block onClick={() => alert("Resolved!")}>Resolve</Button>
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
