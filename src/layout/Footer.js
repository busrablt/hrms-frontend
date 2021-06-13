import React from 'react'
import { Grid, GridColumn ,Icon } from "semantic-ui-react";

function Footer() {
    return (
        <div className="footer">
            <Grid>
                <Grid.Row>
                <GridColumn size={5}>
                <p class="mb-1"> &copy; 2021 Büşra Bulut</p>
                 <ul class="list-inline">
                      <li class="list-inline-item"><a href="https://github.com/busrablt/hrms">Frontend</a></li>
                      <li class="list-inline-item"><a href="https://github.com/busrablt/hrms-frontend">Backend</a></li>
                      <li class="list-inline-item"><a href="#">Hakkımızda</a></li>
                      <li class="list-inline-item"><a href="#">Destek</a></li>
                  </ul>
                </GridColumn>
                <GridColumn size={11}>

                 <ul class="list-inline">
                      <li class="list-inline-item">
                          <Icon name="linkedin " />
                      </li>
                     <li class="list-inline-item">
                          <Icon name="github square" />
                    </li>
                    <li class="list-inline-item">
                          <Icon name="twitter square" />
                    </li>  
                    <li class="list-inline-item">
                          <Icon name="facebook square" />
                    </li>  
                  </ul>

                </GridColumn >
               
                </Grid.Row>
            </Grid>
            
        </div>
    )
}

export default Footer
