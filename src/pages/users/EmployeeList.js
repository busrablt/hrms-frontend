import React from 'react'
import { Header, Image, Table, Icon } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import EmployeeService from '../../services/employeeService';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getEmployees().then((result) => setEmployees(result.data.data));
        }, []);

    return (
        <div>
             <Header as="h2">
                 <Icon name="unordered list" />
                 <Header.Content>Employee List</Header.Content>
             </Header>
            <Table color="purple" >
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell>Employee</Table.HeaderCell>
                         <Table.HeaderCell>Position</Table.HeaderCell>
                         <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
               {employees.map((employee)=>(
                   <Table.Row key={employee.id}>
                       <Table.Cell>
                            <Header as='h4' image>
                                <Image src={employee.url} rounded size='large'></Image>
                                <Header.Content>
                                     {employee.firstName} {employee.lastName}
                               </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{employee.email}</Table.Cell>
                        <Table.Cell>{employee.position}</Table.Cell>
                   </Table.Row>
               ))}
               </Table.Body>
            </Table>
        </div>              
    )

}


export default EmployeeList
