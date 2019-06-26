import React , { Component } from 'react';
import {
  Navbar,
} from 'react-bootstrap';

import Avatar from '../avatar/Avatar'

class AppBar extends Component {

  render(){
   return(
    <Navbar 
      bg="light" 
      className="app-bar justify-content-between"
    >
  	  <Navbar.Brand
        className ="ml-4"
      > 
       ArtSfEvents.com
      </Navbar.Brand>
      <Avatar />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
   );
  }
}

export default AppBar;