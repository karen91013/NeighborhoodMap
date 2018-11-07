import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Pin from './Pin'



const MyMapComponent = withScriptjs(withGoogleMap((props) =>{

  const pins = props.markers.map( (place, index) => <Pin key={index} location={place} id={index} openMarker={props.openMarker} setMarker={props.setMarker}/>);


  return (
      <GoogleMap
        defaultZoom={4.8}
        center={ {lat: 39.8283, lng: -98.5795} }
        >
        {pins}
      </GoogleMap>
    );
  }
))

export default MyMapComponent;
