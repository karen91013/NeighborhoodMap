import React, { Component } from 'react';
import Filter from './Components/Filter';
import MyMap from './Components/Map';

export default class NeighborhoodPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        locations:props.locations,
        openMarker: null,
        filterValue: ""
    };
  }

  setMarker = (key) =>{
    this.setState({
      openMarker: key
    })
  }

  setFilter = (e) =>{
    let locations = this.props.locations;

    locations = locations.filter(function(location) {
     return location.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1; // returns true or false
    });
    this.setState({ locations: locations });

  }

  render() {

    return (
      <div>
        <Filter setFilter={this.setFilter} locations= {this.state.locations} setMarker={this.setMarker}/>
        <MyMap locations= {this.state.locations} setMarker={this.setMarker} openMarker={this.state.openMarker}/>
      </div>
    );
  }
}
