import React, { Component } from 'react';
import MyMapComponent from './MyMapComponent';



export default class MyMap extends Component {

  render() {
    return (
      <MyMapComponent
      markers ={this.props.locations}
      setMarker={this.props.setMarker}
      openMarker={this.props.openMarker}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=GOOGLEMAPSAPI=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `650px`, width: `100vp` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
