import React , { Component } from 'react';

import {
 Container, Row, Col, 
 Form, Button
} from 'react-bootstrap'

import MapContainer from '../google-maps/MapContainer';

class MapPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayForm: false,
    };
  }


  toggleSearchForm(){
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  form(){

    if(!this.state.displayForm){ return; }

    return(
      <div className="map-form-container p-3 h-100 drop-shadow mr-3">
        <Form className="p-1">
           <Form.Row className = "mt-4"> 
            <Form.Control type="text" placeholder="search" />
           </Form.Row>

          <Form.Row className="mt-4"> 
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
      </div>
    );
  }

  render(){
   return(
     <Container fluid>
      <MapContainer />

        <Row>       
          <Button 
           variant="primary"
           onClick={this.toggleSearchForm.bind(this)}
           className="search-button drop-shadow"
           > Search Options </Button>
        </Row>


        <Row>
          <Col xs={5} sm={5} md={5} lg={5} >
            { this.form(this.state.displayForm) }
          </Col>      
        </Row>
     </Container>
   );
  }
}

export default MapPage;
