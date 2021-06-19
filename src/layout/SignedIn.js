import React from 'react'
import { Dropdown, Menu, Image,Grid } from 'semantic-ui-react'
import {  NavLink } from 'react-router-dom';

function SignedIn({signOut}) {
    return (
        <div className="signedIn" style={{display:"flex"}}> 
            <Menu.Item as={NavLink} to="/addJobAdvert" name='Add Job Advert' style={{flex:2}}/> 
            <Menu.Item style={{flex:1}}>
                 <Image avatar spaced="right" src=""/>
                 <Dropdown pointing="top left" text="Büşra">
                       <Dropdown.Menu>
                           <Dropdown.Item text="Bilgilerim" icon="info"/>
                           <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                       </Dropdown.Menu>
                 </Dropdown>
            </Menu.Item>        
        </div>
    )
}

export default SignedIn
