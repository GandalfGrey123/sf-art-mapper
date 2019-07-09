import React, { Component } from 'react';

import { 
  Button, Badge, 
} from 'react-bootstrap';


class Tag extends Component{
  constructor(props){
  	super(props);  	
  }


  render(){
  	const {tagName, tagAction} = this.props;
   return(
   	<div>
   	 <Badge pill className="p-1" variant="secondary">
   	 	 {tagName}

   	 	<Button 
   	 	  className="transparent" 
   	 	  size="xs"
   	 	  onClick={tagAction}
   	 	 >
   	 		x
   	 	</Button>

   	 </Badge>
   	</div>
   );
  }
}


export default Tag;