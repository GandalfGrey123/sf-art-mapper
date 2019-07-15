import React,{Component} from 'react';

import {
  Map, GoogleApiWrapper
} from 'google-maps-react';

import {maps_api_key} from '../../../util/maps_config'


export class MapContainer extends Component {
  render() {

    return (
    	<div>
        <Map 
         google={this.props.google} 
         zoom={14}
         style={{ 
            height: '80%', 
            width: '90%',
            margin: '0 auto',
            marginTop: 60,
          }}
        >
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (maps_api_key)
})(MapContainer)