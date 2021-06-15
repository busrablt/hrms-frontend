import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import SideBar from "./SideBar";
import EmployerList from "../pages/users/EmployerList"
import EmployeeList from "../pages/users/EmployeeList"
import CandidateList from "../pages/users/CandidateList"
import JobAdvertList from "../pages/adverts/JobAdvertList"


function Dashboard() {
    return (
        <div>
             <Grid>
                 <Grid.Row>
                     <Grid.Column width={2}>
                           <SideBar/>
                         </Grid.Column>
                         <Grid.Column width={14}>
                            <Route exact path="/"/>
                            <Route exact path="/employers" component={EmployerList} />
                            <Route exact path="/employees" component={EmployeeList} />
                            <Route exact path="/candidates" component={CandidateList} />
                            <Route exact path="/jobAdverts" component={JobAdvertList} />
                         </Grid.Column>
                 </Grid.Row>
             </Grid>
        </div>    
    )
}

export default Dashboard
