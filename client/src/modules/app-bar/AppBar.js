import React , { Component } from 'react';
import {
  Navbar, Nav
} from 'react-bootstrap';

import Avatar from './avatar/Avatar'

class AppBar extends Component {

  render(){
   return(
    <Navbar 
      bg="dark" 
      variant="dark"
      className="app-nav-bar p-2 justify-content-between"
    >
  	  <Navbar.Brand
        className ="ml-4 text-bold"
        href="/home"
      > 
       ArtSfEvents
      </Navbar.Brand>
       <Nav className="mr-auto">
        
         <Nav.Link href="/">Features</Nav.Link>
         <Nav.Link href="/dash">Browse Events</Nav.Link>
        
       </Nav>
      <Avatar />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
   );
  }
}

export default AppBar;