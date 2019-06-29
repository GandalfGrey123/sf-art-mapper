import React , { Component } from 'react';

import {
 Container, Row, Col,
 Card, ListGroup, Form, InputGroup,
 ButtonToolbar, Button, Image,
} from 'react-bootstrap';

class ListPage extends Component {

  render(){
   return(
	<Container fluid className="list-container mt-5">    
	 <Row className="no-gutters">
	 
	  		
	  	<Col xs={12} sm={7} md={7} lg={7} xl={7}>
        <Card className="">

          <Card.Title>
            <h2 className="p-2 mt-3 text-center">Local Art Event</h2>
          </Card.Title>
          
          <Card.Img 
            variant="top" 
            src="holder.js/100px180" 
            className="pt-4 pl-4 pr-4 w-70"
          />
          <div className="p-4">
             <Card.Subtitle className="text-muted float-right p-2 border drop-shadow">100 people going</Card.Subtitle>
             <hr />
             <Card.Title className="mt-5">Hours and Location</Card.Title>             
              <Card.Text>
                <div>
                  <p> May 13th , 10:00am - 5:00pm </p>
                  <p> 1896 11th ave </p>
                  <p> San Francisco, CA 94122 </p>
                </div>
              </Card.Text>
              <Form>
                 <Form.Group controlId="formBasicChecbox">
                 <Form.Row>
                   <Form.Check className="mr-2" type="checkbox" label="RSVP Going" />
                   <Form.Check className="ml-2" type="checkbox" label="Save Event" />
                 </Form.Row>
                 </Form.Group>
               </Form>
           </div>
           <div className="p-4">
           <Button variant="outline-secondary w-50">
            Event Details Summary
           </Button>
           </div>
		    </Card>
	  	</Col>



	  	
	  	<Col xs={12} sm={5} md={5} lg={5} xl={5}>
	  	 <Card className="w-100 h-100">
	  	   <ListGroup variant="flush">	  	   
	  	      <Card.Body>
    		     <Card.Title>Custom Search Filter</Card.Title>
    		       <Form>

                 <InputGroup className="p-2 mb-3 border-0">                    
                   <Form.Control type="text" placeholder="Search" className="oval-div"/>
                   <InputGroup.Prepend>
                      <InputGroup.Text className="bg-white border-0">
                       <div className="fa fa-search" />
                      </InputGroup.Text>
                   </InputGroup.Prepend>                   
                 </InputGroup>

                 <ButtonToolbar>
                   <Button variant="link">
                     More Search Options
                   </Button>
                 </ButtonToolbar>

               </Form>
  			    </Card.Body>
 
    		    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    		    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    		    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    		    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    		    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    		    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    		    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    		    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    		    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  		   </ListGroup>
	  	 </Card>
	  	</Col>

	   
	 </Row>
	</Container>
   );
  }
}

export default ListPage;