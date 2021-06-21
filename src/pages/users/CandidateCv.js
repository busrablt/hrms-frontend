import React from 'react'
import { useState, useEffect } from "react";
import CandidateService from '../../services/candidateService';
import { Grid, Image,Segment,Header,Icon } from 'semantic-ui-react'

function CandidateCv() {

    const [cv, setCv] = useState({});
    
    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getByCV(31).then((result) => setCv(result.data.data));
        }, [31]);

    return (
        <div>
            <Segment>
                <Grid celled columns={2}>
                    <Grid.Row >
                        <Grid.Column width={6} >

                            <Image src={cv.image?.url} size='small' verticalAlign='middle' />
                            <Header as='h3'>{cv.user?.firstName + " " + cv.user?.lastName}</Header>
                            <Header as='h4'>
                                Doğum Yılı
                                <Header.Subheader>
                                   {cv.user?.birthDate}
                                </Header.Subheader>
                            </Header>
                            <Header as='h3' floated="left" >
                                 İLETİŞİM
                                 <Header.Subheader >
                                     <Icon name='location arrow' />
                                     Türkiye
                                 </Header.Subheader>
                                 <Header.Subheader>
                                     <Icon name='mail' />
                                     {cv.user?.email}
                                 </Header.Subheader>
                                 <Header.Subheader>
                                     <Icon name='call' />
                                     {cv.user?.phoneNumber}
                                 </Header.Subheader>
                                 <Header.Subheader>
                                     <Icon name='github square' />
                                     {/* {cv.socialMediaAccounts[0].link} */}
                                 </Header.Subheader>
                                 <Header.Subheader>
                                     <Icon name='linkedin'  />
                                     {/* {cv.socialMediaAccounts[1].link} */}
                                 </Header.Subheader>
                            </Header>
                        
                        </Grid.Column>
            
                        <Grid.Column width={10}>
                        <Header as='h3'>
                            <Icon name='user' />
                            <Header.Content>ABOUT</Header.Content>
                            <Header.Subheader>
                                    {cv.coverLetter?.note}
                            </Header.Subheader>
                        </Header>

                        <Header as='h3'>
                            <Icon name='graduation' />
                            <Header.Content>EDUCATION AND TRAINING</Header.Content>
                            <Header.Subheader>
                                    21/04/199
                            </Header.Subheader>
                        </Header>

                        <Header as='h3'>
                            <Icon name='building' />
                            <Header.Content>WORK EXPERIENCE</Header.Content>
                            <Header.Subheader>
                                    21/04/199
                            </Header.Subheader>
                        </Header>

                        <Header as='h3'>
                            <Icon name='language' />
                            <Header.Content>LANGUAGE SKILLS</Header.Content>
                            <Header.Subheader>
                                    21/04/199
                            </Header.Subheader>
                        </Header>

                        <Header as='h3'>
                            <Icon name='bookmark' />
                            <Header.Content>CONFERENCES AND SEMINARS</Header.Content>
                            <Header.Subheader>
                                    21/04/199
                            </Header.Subheader>
                        </Header>

                        <Header as='h3'>
                            <Icon name='react' />
                            <Header.Content>DIGITAL SKILLS </Header.Content>
                            <Header.Subheader>
                                    21/04/199
                            </Header.Subheader>
                        </Header>
                        
                        <Header as='h3'>
                            <Icon name='certificate' />
                            <Header.Content>CERTIFICATES</Header.Content>
                            <Header.Subheader>
                                    21/04/199
                            </Header.Subheader>
                        </Header>
                                
                        
                     </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            
        </div>
    )
}

export default CandidateCv
