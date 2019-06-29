import React,{Component} from 'react';

import {
 Container,
} from 'react-bootstrap'

import {
  Map, GoogleApiWrapper
} from 'google-maps-react';

import {maps_api_key} from '../../../util/maps_config'


export class MapContainer extends Component {
  render() {
    return (
    	<div>
       <Container className="map-container">
        <Map google={this.props.google} zoom={14}>
        </Map>
       </Container>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (maps_api_key)
})(MapContainer)