import React from 'react'
import { Button,Container, Menu, Image } from 'semantic-ui-react'
import Language from './Language'
function Navi() {
    return (
        <div>
            <Menu inverted fixed= "top">
                <Container>
                  <Menu.Item>
                      <Image src="./hrms.PNG" rounded size='tiny'/>
                  </Menu.Item>
                   <Menu.Item name='home'/>
                   <Menu.Item name='messages'/>
                   <Menu.Menu position='right'>
                       <Language/>
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                        <Button primary>Login</Button>
                    </Menu.Item>
                   </Menu.Menu>
                </Container>
            </Menu>      
        </div>
    )
}

export default Navi
