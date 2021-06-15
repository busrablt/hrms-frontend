import React from 'react'
import { Header, Image, Table,Button, Icon } from 'semantic-ui-react';
import { useState, useEffect } from "react";
import EmployerService from '../../services/employerService';


function CandidateList() {
    const [employers, setEmployers] = useState([]);
    
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then((result) => setEmployers(result.data.data));
        }, []);

    return (
        <div>
            <Header as="h2">
                 <Icon name="unordered list" />
                 <Header.Content>Employer List</Header.Content>
             </Header>
            <Table color="purple" >
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell>Employer</Table.HeaderCell>
                         <Table.HeaderCell> Website</Table.HeaderCell>
                         <Table.HeaderCell> Email</Table.HeaderCell>
                         <Table.HeaderCell> Phone Number</Table.HeaderCell>
                         <Table.HeaderCell> Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {employers.map((employer)=>(
                   <Table.Row key={employer.id}>
                       <Table.Cell>
                            <Header as='h4' image>
                                <Image src={employer.url} rounded size='large'></Image>
                                <Header.Content>
                                     {employer.companyName} 
                               </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{employer.webAdress}</Table.Cell>
                        <Table.Cell>{employer.email}</Table.Cell>
                        <Table.Cell>{employer.phoneNumber}</Table.Cell>
                        <Table.Cell><Button>View</Button></Table.Cell>
                   </Table.Row>
               ))}
               </Table.Body>
            </Table>
        </div>              
    )
}

export default CandidateList