import React from 'react';
import {Form, Col} from 'react-bootstrap';

class CarFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isFree: props.free
    };
  }

  render() {
    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="brand" className="mb-2">
                        <Form.Label className="mb-0">Brand</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option></option>
                            <option>Tesla</option>
                            <option>BMW</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="model" className="mb-2">
                        <Form.Label className="mb-0">Model</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option></option>
                            <option>Model S</option>
                            <option>3er</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="complectation" className="mb-2">
                        <Form.Label className="mb-0">Complectation</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option></option>
                            <option>So so</option>
                            <option>Luxury</option>
                        </Form.Control>
                    </Form.Group>                    
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="bodytype">
                        <Form.Label className="mb-0">Body type</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option></option>
                            <option>Sedan</option>
                            <option>Hatchback</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="color">
                        <Form.Label className="mb-0">Color</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option></option>
                            <option>Blue</option>
                            <option>Silver</option>
                        </Form.Control>
                    </Form.Group>
                    {this.state.isFree &&
                    <Form.Group as={Col} controlId="gearbox">
                        <Form.Label className="mb-0">Gearbox</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option></option>
                            <option>Automatic</option>
                            <option>cvvt</option>
                        </Form.Control>
                    </Form.Group>}
                    {this.state.isFree &&
                    <Form.Group as={Col} controlId="petrol">
                        <Form.Label className="mb-0">Petrol</Form.Label>
                        <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                            <option></option>
                            <option>benzin</option>
                            <option>Diesel</option>
                        </Form.Control>
                    </Form.Group>}
                    {!this.state.isFree &&
                    <Form.Group as={Col} controlId="enginegearbox">
                    <Form.Label className="mb-0">Engine & transmission</Form.Label>
                    <Form.Control as="select" onChange={(e) => alert(e.target.value)}>
                        <option></option>
                        <option>Automatic</option>
                        <option>Manual</option>
                    </Form.Control>
                    </Form.Group>}                    
                </Form.Row>
            </Form>
        </div>      
    );
  }  
}

export default CarFilter;
