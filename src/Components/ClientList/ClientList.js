import React from 'react';
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import OrderItem from '../OrderItem/OrderItem';

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClient: false
    };
  }

  render() {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header className="px-0">
                        <Container className="mx-1">
                            <Row className="d-flex align-items-center">
                                <Col xl={1} className="px-1">
                                    <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showClient: true})}>Info</Button>
                                </Col>
                                <Col className="px-1">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">Kirill A</Accordion.Toggle>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <OrderItem />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>      
    );
  }  
}

export default ClientList;
