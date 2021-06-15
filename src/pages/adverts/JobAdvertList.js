import React, { useEffect, useState } from 'react'
import { Header, Button, Table, Icon } from 'semantic-ui-react'
import JobAdvertsService from '../../services/jobAdvertService'

function JobAdvertList() {
    const[jobAdverts, setJobAdverts] = useState([])
     useEffect(()=>{
         let jobAdvertService = new JobAdvertsService()
         jobAdvertService.getJobAdverts().then((result)=> setJobAdverts(result.data.data))

     },[])

    return (
        <div>
            <Header as="h2">
                 <Icon name="unordered list" />
                 <Header.Content>Job Advert List</Header.Content>
             </Header>
            <Table color="purple" >
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell>Employer Name</Table.HeaderCell>
                         <Table.HeaderCell> Position</Table.HeaderCell>
                         <Table.HeaderCell> City</Table.HeaderCell>
                         <Table.HeaderCell> Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {jobAdverts.map((jobAdvert)=>(
                   <Table.Row key={jobAdvert.id}>
                        <Table.Cell>{jobAdvert.employer.CompanyName}</Table.Cell>
                        <Table.Cell>{jobAdvert.jobPosition.position}</Table.Cell>
                        <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                        <Table.Cell><Button>View</Button></Table.Cell>
                   </Table.Row>
               ))}
               </Table.Body>
            </Table>
        </div>
    )
}

export default JobAdvertList
