import React, { Component } from 'react';

import {
  Container, Col, Row,
  Form, Button,
  Card, 
  DropdownButton, Dropdown , InputGroup, FormControl,
} from 'react-bootstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tag from './Tag';


import {placesAutoQuery} from '../../../api/places.services';

class AdForm extends Component{
  constructor(props){
   super(props);
   this.state={    
    form:{
      listingTitle: 'Your Event Title',
      address:'',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      tickets: 'tickets',
    },      
   };
  }

  //fill dropdown with suggestions
  querySuggestions(searchTerm){
    placesAutoQuery(searchTerm,()=>{
      return;
    })
  }

  handleDateChange(name,date){
    this.setState({
     form:{
       ...this.state.form,
       [name]: date
     }
    });
  }  

  handleFormChange(event){
    if(event.target.name === "address"){
     this.querySuggestions(event.target.value);
     return;
    }

    this.setState({
      form:{
        ...this.state.form,
         [event.target.name]: event.target.value
      }
    })
  }

  render(){
   
   const { form } = this.state;

   return(
    <div className="p-5">
     <Container className="p-5 bg-light border">
     <Row>
  
       <Col lg={12} className="bg-white border h-50 p-3">
        <Form className="p-5">
         
          <Form.Group>
           <Form.Label>Event Date: </Form.Label>
           <Form.Row>
             <Col>             
             <DatePicker
               selected={form.startDate}
               onChange={this.handleDateChange.bind(this,"startDate")}
             />
             </Col>
             
             <Col>
             <DatePicker
               selected={form.endDate}
               onChange={this.handleDateChange.bind(this,"endDate")}
             />
             </Col>

           </Form.Row>
          </Form.Group>


          <Form.Group>
          <Form.Label>Event Hours: </Form.Label>
          <Form.Row>
            
             <Col>
             <input className="w-100 p-1" type="number" name="quantity" min="0" max="12" />
             </Col>
              <div className="ml-1 mr-1"> : </div>
             <Col>
             <input className="w-100 p-1" type="number" name="quantity" min="0" max="59" />
             </Col>
             
             <Col>
               <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>am</option>
                    <option>pm</option>
                  </Form.Control>
                </Form.Group>
             </Col>
             
    
             <Col>
             <input className="w-100 p-1" type="number" name="quantity" min="0" max="12" />
             </Col>
             
             <div className="ml-1 mr-1"> : </div>

             <Col>
             <input className="w-100 p-1" type="number" name="quantity" min="0" max="59" />
             </Col>

             <Col>
               <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>am</option>
                    <option>pm</option>
                  </Form.Control>
                </Form.Group>
             </Col>
            
          </Form.Row>
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label>Address / Location</Form.Label>
            <Form.Control 
              name="address"              
              type="text" 
              placeholder="123 st San Francisco CA 94122"
              onChange={this.handleFormChange.bind(this)}
            />
          </Form.Group>
        
          <hr/>

         <InputGroup className="p-5">
          <InputGroup.Prepend>
             <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
           <FormControl
             placeholder= "Admission Fees"
             aria-label="Recipient's username"    
           />
       
           <DropdownButton
             as={InputGroup.Append}
             variant="outline-secondary"
             title={ this.state.form.tickets}
             id="input-group-dropdown-2"
           >
             <Dropdown.Item href="#">Required</Dropdown.Item>
             <Dropdown.Item href="#">No Fees</Dropdown.Item>
           </DropdownButton>
         </InputGroup>


          <hr/>

           <Form.Group className="mt-5">
            
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="listingTitle"
              type="input" 
              placeholder="enter ad title" 
              onChange ={this.handleFormChange.bind(this)}
            />
           </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Select an art type</Form.Label>
            <Form.Control as="select" multiple>
              <option> Painting</option>
              <option> Photography </option>
              <option> Screen Printing</option>
              <option> Music </option>
              <option> Digital </option>
            </Form.Control>
          </Form.Group>

          <Card className="bg-light" border="light">
           <Card.Body>
            <Tag 
             tagName="hello"
             tagAction={()=>{alert('hello');}}
            />            
           </Card.Body>
          </Card>          

          <div className="p-2 mt-5">
          <Button variant="secondary" block type="submit" className="p-3">
           Post Your Ad
          </Button>
          </div>

        </Form>
       </Col>
     </Row>
     </Container>
     </div>
   );
  }
}

export default AdForm;
