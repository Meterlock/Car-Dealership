import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import CarFilter from '../CarFilter/CarFilter';
import CarList from '../CarList/CarList';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: "stock"
    };
  }

  render() {
    return (
        <div>
            <Tabs
                activeKey={this.state.key}
                onSelect={(k) => (this.setState({key: k}))}>
                <Tab eventKey="stock" title="Cars in stock">
                    <CarFilter free={true} />
                    <CarList />
                </Tab>
                <Tab eventKey="request" title="Configurate a request">
                    <CarFilter free={false} />
                </Tab>
            </Tabs>
        </div>      
    );
  }  
}

export default Catalog;