import React from "react";
import { Marker, InfoWindow } from "react-google-maps";


export default class Pin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openMarker: null,
    };
  }

  render(){
    return(
        <Marker position={this.props.location.location} onClick={e => this.props.setMarker(this.props.id)}>
          { this.props.openMarker === this.props.id ?
            <InfoWindow maxWidth={800} defaultPosition={ this.props.location.location } onCloseClick={e=>this.props.setMarker(null)}>
              <div>
                <h4>{this.props.location.title}</h4>
                <p>Summary:{this.props.location.weather.summary}</p>
                <p>Temp: {this.props.location.weather.temperature}°F</p>
                {this.props.location.weather.precipProbability > 0 ? <p>{this.props.location.weather.precipProbability * 100}% chance of {this.props.location.weather.precipType}</p> : null }
              </div>
            </InfoWindow> : null
          }
        </Marker>
    );
  }
}
