import React , { Component } from 'react';

import {
 Container, Row, Col, 
 Card, Button, Image, Form
} from 'react-bootstrap'



class BrowsePage extends Component {

  render(){
   return(
    <Container fluid className="mt-5">
     <Row>

       <Col sm={2}>
       	 <Button className="browse-button" variant="outline-dark"> Back </Button>
       </Col>
       
       <Col sm={8}>        
         <Row className="no-gutters">
           
           <Col xs={12} sm={12} md={12} lg={7}>
              <Card className="browse-card h-100">

                <Card.Title>
                  <h2 className="p-2">SF Art Event Title</h2>
                </Card.Title>

                <Card.Img 
                  variant="top"                   
                  src="holder.js/100px180" 
                  className="pt-4 pl-4 pr-4"
                />
                <div className="p-4">
                  <Card.Subtitle className="text-muted float-right">100 people going</Card.Subtitle>
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
              </Card>
           </Col>

           <Col xs={12} sm={12} md={12} lg={5}>
              <Card className="browse-card bg-light h-100 p-3">
                <Card.Title className="mt-5 ml-3">       
                  <Image 
                    className="avatar mr-3"
                    src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png" 
                    roundedCircle                         
                   />             
                  <a href="#dfd">Listing Post Author</a>            
                </Card.Title>
                <Card.Subtitle className="text-muted p-4">
                  Event Summary 
                </Card.Subtitle>
                <Card.Text>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum
                </Card.Text>                
              </Card>
           </Col>

         </Row>
       </Col>
       
       <Col sm={2}>
       	 <Button className="browse-button" variant="outline-dark"> Next </Button>
       </Col>

     </Row>
   	</Container>
   );
  }
}

export default BrowsePage;          
      




