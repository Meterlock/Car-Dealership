import React from 'react';
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import OrderItem from '../OrderItem/OrderItem';

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClient: false,
      orders: [
        {
          id: "1",
          startdate: "28.04.2020",
          creator: "Some Body",
          status: "Resolved",
          enddate: "08.05.2020"
        },
        {
          id: "3",
          startdate: "11.05.2020",
          creator: "Ben Stenl",
          status: "Resolved",
          enddate: "18.05.2020"
        }
      ]
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
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">Kirill Alexeenko</Accordion.Toggle>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <OrderItem order={this.state.orders[0]} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Card.Header className="px-0">
                        <Container className="mx-1">
                            <Row className="d-flex align-items-center">
                                <Col xl={1} className="px-1">
                                    <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showClient: true})}>Info</Button>
                                </Col>
                                <Col className="px-1">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">Denis Kaminsky</Accordion.Toggle>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <OrderItem order={this.state.orders[0]} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className="px-0">
                        <Container className="mx-1">
                            <Row className="d-flex align-items-center">
                                <Col xl={1} className="px-1">
                                    <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showClient: true})}>Info</Button>
                                </Col>
                                <Col className="px-1">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">Sam Smith</Accordion.Toggle>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <OrderItem order={this.state.orders[0]} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className="px-0">
                        <Container className="mx-1">
                            <Row className="d-flex align-items-center">
                                <Col xl={1} className="px-1">
                                    <Button variant="outline-warning" size="sm" block onClick={() => this.setState({showClient: true})}>Info</Button>
                                </Col>
                                <Col className="px-1">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">Nick Berry</Accordion.Toggle>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <OrderItem order={this.state.orders[0]} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>      
    );
  }  
}

export default ClientList;
