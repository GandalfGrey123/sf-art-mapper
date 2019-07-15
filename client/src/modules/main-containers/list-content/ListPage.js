import React , { Component } from 'react';

import {
 Container, Row, Col,
 Card, ListGroup, Form, InputGroup,
 ButtonToolbar, Button,
} from 'react-bootstrap';

class ListPage extends Component {

  render(){
   return(
	<Container className="list-container mt-5">    
	 <Row className="no-gutters">
	 
  	
	  	<Col>
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
