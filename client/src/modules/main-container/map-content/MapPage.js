import React , { Component } from 'react';

import {
 Container, Row, Col, 
 Form, Button
} from 'react-bootstrap'

import MapContainer from '../google-maps/MapContainer';

class MapPage extends Component {

  render(){
   return(
   	<Container fluid className="ml-2 mt-5">
  		<Row>  		  
  		  <Col
  		   xs={12} md={12} lg={3}
  		   className="map-form-container p-3 h-100 drop-shadow mr-3"
  		  >
  		   <Form className="p-1">
  		     <Form.Row className = "mt-4"> 
  		  	 	<Form.Control type="text" placeholder="search" />
  		  	 </Form.Row>

  		  	 <Form.Row className = "mt-4"> 
    			<Form.Group as={Col} sm="12" md="6" controlId="formGridEmail">
    			  <Form.Label>Email</Form.Label>
    			  <Form.Control type="email" placeholder="ZipCode" />
    			</Form.Group>
			
    			
    			<Form.Group as={Col} sm="12" md="6" controlId="exampleForm.ControlSelect1">
    			  <Form.Label>distance miles</Form.Label>
    			  <Form.Control as="select">
    			    <option>1 miles</option>
    			    <option>2 miles</option>
    			    <option>3 miles</option>
    			    <option>4 miles</option>
    			    <option>5 miles</option>
    			  </Form.Control>  				
    			</Form.Group>
  			 </Form.Row>

  			 
  			 	<Form.Group controlId="exampleForm.ControlSelect2">
    		 	<Form.Label>Select Art Type</Form.Label>
    		 	  <Form.Control as="select">
    		 	    <option>1</option>    	
    		 	  </Form.Control>
  			 	</Form.Group>
  			 

  			 <Form.Row className = "mt-4">
  			  	<Form.Group as={Col} controlId="checkBoxGroup1">
  			 	  <Form.Check 
        		   type='checkbox'       		
        		   label='today'
      			   />

      			   <Form.Check 
        		   type='checkbox'       		
        		   label='upcoming'
      			   />


      			   <Form.Check 
        		   type='checkbox'       		
        		   label='this week'
      			   />
      			 </Form.Group>

      			 <Form.Group as={Col} controlId="checkBoxGroup2">
      			   <Form.Check 
        		   type='checkbox'       		
        		   label='my events'
      			   />
  
      			   <Form.Check 
        		   type='checkbox'       		
        		   label='saved events'
      			   />
      			 </Form.Group>
  			 </Form.Row>


  			 <Form.Row className = "mt-4">
  		  	 	<Button variant="outline-primary" block>
  		  	 		Update
  		  	 	</Button>
  		  	 </Form.Row>
  		   </Form>
  		  </Col>
  		
  		  <Col 
  		   xs={12} md={12} lg={8}  		  
  		  >
  		   <MapContainer/>
  		  </Col>

  		</Row>
	  </Container>
   );
  }
}

export default MapPage;