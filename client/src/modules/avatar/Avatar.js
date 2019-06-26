import React , { Component } from 'react';
import {
 Image,
 Dropdown,
} from 'react-bootstrap';


class Avatar extends Component {

  render(){
   return(
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">          
          
          <Image 
            className="avatar"
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png" 
            roundedCircle                         
          />

        </Dropdown.Toggle>

        <Dropdown.Menu
         alignRight
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
    </div>
   );
  }
}

export default Avatar;