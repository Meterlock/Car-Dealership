import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class EmployeeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.employee = props.employee;

  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <h4 className="mx-2">{this.employee.name}</h4>
              </Row>
              <Row className="mb-1">
                  <Col>
                    <p className="mb-0">Birth date: {this.employee.birthday}</p>                    
                    <p className="mb-0">Phone: {this.employee.phone}</p>
                    <p className="mb-0">Email: {this.employee.email}</p> 
                  </Col>
                  <Col>
                    <p className="mb-0">Role: {this.employee.role}</p>                    
                    <p className="mb-0">Salary: ${this.employee.salary}</p>
                  </Col>
              </Row>
            </Container>
        </div>      
    );
  }  
}

export default EmployeeInfo;
