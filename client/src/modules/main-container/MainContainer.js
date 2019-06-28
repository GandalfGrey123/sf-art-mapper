import React , { Component } from 'react';

import {
 Nav, Navbar
} from 'react-bootstrap';

import HomePage from './home-content/HomePage';
import MapPage from './map-content/MapPage';
import BrowsePage from './browse-content/BrowsePage';
import ListPage from './list-content/ListPage';



class MainContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: 'browse-link',
    };
  }

  displayContent(){
  let option = this.state.selectedOption;

   switch(option){
   	 case "map-link":
     return <MapPage />;

     case "home-link":
     return <HomePage />;
     
     case "browse-link":
     return <BrowsePage />;

     case "list-link":
     return <ListPage />;

     default:
     break;
   }


  }

  selectOption( keyName ){
   this.setState({ 
    selectedOption: keyName 
   });
  }

  render(){
  	const {selectedOption} = this.state;

   return(
   	<div>     
        <Nav 
          fill
          className="justify-content-center text-center mx-auto" 
          expand="sm"          
          aria-controls="switchContainerNav" 
        > 
        
          <Navbar 
            className="justify-content-center nav-bar main-nav" 
            expand="sm" 
            onSelect={selectedKey => this.selectOption(selectedKey)}
           >          
          <Navbar.Toggle aria-controls="switchContainerNav" />
          <Navbar.Collapse id="switchContainerNav" className="mt-3">        
            
            <Nav.Link className="ml-3 mr-3" eventKey="home-link" disabled={ selectedOption === "home-link" }> Home </Nav.Link>
            
            <Nav.Link className="ml-3 mr-3" eventKey="map-link" disabled={ selectedOption === "map-link" }> Events Map</Nav.Link>
            
            <Nav.Link className="ml-3 mr-3" eventKey="browse-link" disabled={ selectedOption === "browse-link" }> Browse Events</Nav.Link>
            
            <Nav.Link className="ml-3 mr-3" eventKey="list-link" disabled={ selectedOption === "list-link" }> Events List</Nav.Link>

          </Navbar.Collapse>
          </Navbar>
        </Nav>
     
    { this.displayContent(selectedOption) }
   	 
   	</div>
   );
  }
}

export default MainContainer;