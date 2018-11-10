import React, { Component } from 'react';
export default class Filter extends Component {

  render() {
    return (
      <div className = "options-box">
        <input onChange={e => this.props.setFilter(e)} placeholder="Search" role="Search Input" tabIndex="4"></input>
        <ul>
          {this.props.locations.map( (place, index) => <li tabIndex="4" key={index} id={index} role= "Location" onClick={e=> this.props.setMarker(index)}>{place.title}</li>)}
        </ul>
      </div>
    );
  }
}
