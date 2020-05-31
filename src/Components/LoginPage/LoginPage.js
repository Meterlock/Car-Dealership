import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }

  handleAuthClick(e) {
    e.preventDefault();
    this.props.logInCallback(this.state.email, this.state.password);
  }

  render() {
    return (
        <div id="general-login-div" className="d-flex align-items-center">
            <Container>
                <Row className="justify-content-md-center">
                    <h1 id="login-id">Welcome to Car Dealer Pro!</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({email: e.target.value})} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(e) => this.handleAuthClick(e)}>Submit</Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>      
    );
  }  
}

export default LoginPage;
