import React, { Component } from 'react';
export default class Filter extends Component {

  render() {
    return (
      <div className = "options-box">
        <input onChange={e => this.props.setFilter(e)} placeholder="Search"></input>
        <ul>
          {this.props.locations.map( (place, index) => <li key={index} id={index} onClick={e=> this.props.setMarker(index)}>{place.title}</li>)}
        </ul>
      </div>
    );
  }
}
