import React , { Component } from 'react';

import {
 Container,
} from 'react-bootstrap'

class HomePage extends Component {

  render(){
   return(
    <Container fluid style={{
       backgroundImage: "url(" + "https://upload.wikimedia.org/wikipedia/commons/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg" + ")",
  		backgroundPosition: 'center',
  		backgroundSize: 'cover',
  		backgroundRepeat: 'no-repeat',
  		height:1000,
  		marginTop:-100,

    }}>
    <h1 style={{paddingTop:200,}} className="text-center"> Welcome to ArtSfEvents.com</h1>
    </Container>    
   );
  }
}

export default HomePage;