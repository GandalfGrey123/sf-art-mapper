import React , { Component } from 'react';

import {
 Container, Row , Col,
 Card, Form
} from 'react-bootstrap'

class HomePage extends Component {

  displayForm(){
   return(

     <Form className="p-5">
      <Form.Group>
        <Form.Label>Login </Form.Label>
        <Form.Row>
        </Form.Row>
       </Form.Group> 
     </Form>

   );
  }

  render(){
   return(
    <Container fluid 
      style={{
        backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg)",
  		  backgroundPosition: 'center',
  		  backgroundSize: 'cover',
  		  backgroundRepeat: 'no-repeat',
  		  height:1000,
  		  marginTop:-100,

      }}
     >

    <h1 
      style={{paddingTop:200,}} 
      className="text-center mb-5"
     > 
       Welcome to ArtSfEvents.com
     </h1>

     <Row className="mt-5">
         <Col></Col>
  
         <Col lg={8}>
           <Card>
             {this.displayForm()}
           </Card>
         </Col>
  
         <Col></Col>
      </Row>

    </Container>    
   );
  }
}

export default HomePage;