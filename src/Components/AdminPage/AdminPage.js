import React from 'react';
import Header from '../Header/Header';
import SwaggerUI from "swagger-ui-react";
import {BASE_URL} from '../../vars';
import "swagger-ui-react/swagger-ui.css";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  menuItems = [];

  render() {
    return (
        <div>
            <Header items={this.menuItems}
                username={this.props.username}
                logOutCallback={() => this.props.logOutCallback()} />
            <SwaggerUI url={BASE_URL + "/swagger/V1/swagger.json"} 
              requestInterceptor={(request) => {request.credentials = 'include'; return request;}} />
        </div>      
    );
  }  
}

export default AdminPage;
