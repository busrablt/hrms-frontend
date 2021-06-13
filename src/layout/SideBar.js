import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

function SideBar() {
    return (
        <div>
            <Menu inverted icon="labeled" vertical>
              <Menu.Item name="bullhorn">
                <Icon name="bullhorn" />
                Job Adverts
              </Menu.Item>
             <Menu.Item name="users" >
                <Icon name="user" />
                Candidates
             </Menu.Item>
             <Menu.Item name="users">
                <Icon name="user" />
                Employer
             </Menu.Item>
             <Menu.Item name="users">
                <Icon name="user" />
                 Employee
            </Menu.Item>
          </Menu>
        </div>
    )
}

export default SideBar
