import React from 'react';
import {
	Carousel,
} from 'react-bootstrap';

function App() {
  return (
    <div className="layer">

        <Carousel className="carasouel-body">
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://raw.githubusercontent.com/GandalfGrey123/sf-art-mapper/site-unavailable/unavailable-img/roadblock-512.png"
             alt="First slide"
           />
           <Carousel.Caption>
             <h3> Site Under Construction !</h3>
               <p>Sorry this website is temporarily unavailable</p>               
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://cdn2.iconfinder.com/data/icons/round-varieties/60/Rounded_-_High_Ultra_Colour02_-_Maps-512.png"
             alt="Google Maps API"
           />
       
           <Carousel.Caption>
             <h3>Website Features</h3>
             <p> This site uses the Google Maps API to display a over view of all local events</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://cdn4.iconfinder.com/data/icons/web-development-5/500/api-code-window-512.png"
             alt="Third slide"
           />
       
           <Carousel.Caption>
             <h3>Website Features</h3>
             <p>This site provides access to large open data sets from the EventBrite API</p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
      
    </div>
  );
}

export default App;
