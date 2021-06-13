import React from 'react'
import { Header, Image, Table,Button } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import CandidateService from '../../services/candidateService';

function CandidateList() {
    const [candidates, setCandidates] = useState([]);
    
    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidates().then((result) => setCandidates(result.data.data));
        }, []);

    return (
        <div>
            <Table basic='very' celled collapsing>
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell>Candidate</Table.HeaderCell>
                         <Table.HeaderCell> Mail</Table.HeaderCell>
                         <Table.HeaderCell> Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {candidates.map((candidate)=>(
                   <Table.Row key={candidate.id}>
                       <Table.Cell>
                            <Header as='h4' image>
                                <Image src={candidate.url} rounded size='mini'>{candidate.url}</Image>
                                <Header.Content>
                                     {candidate.firstName} {candidate.lastName}
                               </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{candidate.email}</Table.Cell>
                        <Table.Cell><Button>View</Button></Table.Cell>
                   </Table.Row>
               ))}
               </Table.Body>
            </Table>
        </div>              
    )
}

export default CandidateList