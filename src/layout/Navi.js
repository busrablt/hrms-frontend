import React from 'react'
import { Container, Menu, Image } from 'semantic-ui-react'
import  {useState} from "react";
import { useHistory } from "react-router";
import Language from './Language'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn';

function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
      }
    
      function handleSignIn() {
        setIsAuthenticated(true)
      }
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
                       {isAuthenticated?<SignedIn signOut={handleSignOut} />
                       :<SignedOut signIn={handleSignIn}/>} 
                   </Menu.Menu>
                </Container>
            </Menu>      
        </div>
    )
}

export default Navi
