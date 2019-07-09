import React, { Component } from 'react';

import {
  Container, Col, Row,
  Form, Button,
  Card, Badge,
} from 'react-bootstrap';

import Tag from './Tag';

class AdForm extends Component{
  constructor(props){
   super(props);
   this.state={
    form:{
      listingTitle: 'Your Event Title',
      address:'',
      description: '',
    },      
   }
  }

  handleFormChange(event){

    this.setState({
      form:{
        ...this.state.form,
         [event.target.name]: event.target.value
      }
    })
  }

  render(){
    const {form} = this.state;

   return(
    <div className="p-2">
     <Container fluid className="p-5 bg-light border">
     <Row>
       <Col lg={6}>
          <Card className="browse-card">
            <Card.Title className="p-3"> 
              <h2 className="p-2">
               { form.listingTitle }
              </h2>
            </Card.Title>

            <Card.Img 
              variant="top"                   
              src="holder.js/100px180" 
              className="pt-4 pl-4 pr-4"
            />

          </Card>
       </Col>
  
       <Col lg={6} className="bg-white border h-50 p-3">
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="listingTitle"
              type="text" 
              placeholder="enter ad title" 
              onChange = {this.handleFormChange.bind(this)}
            />
          </Form.Group>

          <Card className=""  border="light">
           <Card.Body>
            <Tag 
             tagName="hello"
             tagAction={()=>{alert('hello');}}
            />            
           </Card.Body>
          </Card>

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

          <Form.Group>
           <Form.Label>Event Hours: </Form.Label>
          <Form.Row>
            
             <Col>
             <input className="w-100" type="number" name="quantity" min="0" max="12" />
             </Col>

             <Col>
             <input className="w-100" type="number" name="quantity" min="0" max="59" />
             </Col>
             
             <Col>
               <select>
                <option value="am">am</option>
                <option value="pm">pm</option>
               </select>
             </Col>

             <Col>
             <input className="w-100" type="number" name="quantity" min="0" max="12" />
             </Col>

             <Col>
             <input className="w-100" type="number" name="quantity" min="0" max="59" />
             </Col>

             <Col>
               <select>
                <option value="am">am</option>
                <option value="pm">pm</option>
               </select>
             </Col>
            
          </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Label>Address / Location</Form.Label>
            <Form.Control type="text" placeholder="123 st San Francisco CA 94122" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <div className="p-2">
          <Button variant="secondary" block type="submit" className="p-2">
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