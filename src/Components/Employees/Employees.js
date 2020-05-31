import React from 'react';
import {Form} from 'react-bootstrap';
import EmployeeInfo from '../EmployeeInfo/EmployeeInfo';

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "Kirill Alexeenko",
          birthday: "01.01.2020",
          email: "myemail@gmail.com",
          phone: "+1 324 34324324",
          role: "Manager",
          salary: "1000"
        },
        {
            name: "Denis Kaminsky",
            birthday: "01.01.2020",
            email: "myemail@gmail.com",
            phone: "+1 324 34324324",
            role: "Serviceman",
            salary: "1000"
        },
        {
            name: "Olle Lukoye",
            birthday: "01.01.2020",
            email: "myemail@gmail.com",
            phone: "+1 324 34324324",
            role: "Purchase specialist",
            salary: "1000"
        },
        {
            name: "Kirill Alexeenko",
            birthday: "01.01.2020",
            email: "myemail@gmail.com",
            phone: "+1 324 34324324",
            role: "Manager",
            salary: "1000"
        }
      ]
    };
  }

  render() {
    const data = [{name: 'Page A', uv: 400}, {name: 'Page A', uv: 300},
                    {name: 'Page A', uv: 500}, {name: 'Page A', uv: 800}];

    return (
        <div>
            <div className="mb-2 ml-3 mr-5 pr-5">
              <Form.Control placeholder="Search" /*onChange={filter array of users}*/></Form.Control>
            </div>   
            {this.state.employees.map((item) => <EmployeeInfo employee={item} />)}
        </div>      
    );
  }  
}

export default Employees;
