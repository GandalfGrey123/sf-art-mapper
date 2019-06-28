import React, { Component } from 'react';

import { 
  Map,
} from 'google-maps-react';

class GoogleMap extends Component{
  constructor(props){
   super(props);
   this.state={	 	
   }
  }

  render(){
   return(
     <div>
     	<Map
     	 google={this.props.google}
     	/>
     </div>
   );
  }
}



export default GoogleMap;