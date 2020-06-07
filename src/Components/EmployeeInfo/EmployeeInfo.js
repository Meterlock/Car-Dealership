import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class EmployeeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Container className="border border-secondary mb-1">
              <Row>
                <h4 className="mx-2">{this.props.employee.firstName + " " + this.props.employee.lastName}</h4>
              </Row>
              <Row className="mb-1">
                  <Col>
                    <p className="mb-0">Birth date: {new Date(Date.parse(this.props.employee.birthday)).toLocaleDateString()}</p>                    
                    <p className="mb-0">Phone: {this.props.employee.phone}</p>
                    <p className="mb-0">Email: {this.props.employee.email}</p> 
                  </Col>
                  <Col>
                    <p className="mb-0">Role: {this.props.employee.role.name}</p>                    
                    <p className="mb-0">Salary: ${this.props.employee.salary}</p>
                  </Col>
              </Row>
            </Container>
        </div>      
    );
  }  
}

export default EmployeeInfo;
