import React from 'react';
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import OrderItem from '../OrderItem/OrderItem';
import InfoModal from '../InfoModal/InfoModal';
import ClientInfo from '../ClientInfo/ClientInfo';

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: null,
      showClient: false
    };
  }

  render() {
    return (
        <div>
            <Accordion>
            {this.props.clients.map((item, index) => 
                <Card>
                    <Card.Header className="px-0">
                        <Container className="mx-1">
                            <Row className="d-flex align-items-center">
                                <Col xl={1} className="px-1">
                                    <Button variant="outline-warning" size="sm" block onClick={() => this.setState({clientId: item.id, showClient: true})}>Info</Button>
                                </Col>
                                <Col className="px-1">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>{item.firstName + " " + item.lastName}</Accordion.Toggle>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                            {item.orders.map((item) => <OrderItem key={item.id} order={item} onComplete={(id) => this.props.handleComplete(id)} />)}
                        </Card.Body>
                    </Accordion.Collapse>                    
                </Card>                
                )}
            </Accordion>
            {this.state.showClient && <InfoModal header="Client Info" body={<ClientInfo client={this.state.clientId} />} 
                show={true} hide={() => this.setState({showClient: false})}/>}
        </div>      
    );
  }  
}

export default ClientList;
