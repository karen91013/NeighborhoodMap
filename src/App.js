import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NeighborhoodPage from './NeighborhoodPage'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        locations:[
               {title: "Central Park, New York, NY", location: {lat: 40.7850, lng: -73.9682}},
               {title: "Griffith Park, Los Angeles, CA", location: {lat: 34.1366, lng: -118.2942}},
               {title: "Lincoln Park, Chicago, IL", location: {lat: 41.9214, lng: -87.6513}},
               {title: "Zilker Park, Austin, TX", location: {lat: 30.2670, lng: -97.7729}},
               {title: "Golden Gate Park, San Francisco, CA", location: {lat: 37.7694, lng: -122.4862}}]
    };
  }

  componentDidMount(){
    let x=0;
    for(let index in this.state.locations){
      let lat=this.state.locations[index].location.lat
      let lng= this.state.locations[index].location.lng
      let classCopy= this.state.locations
      fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/DARKSKYAPIKEY/${lat},${lng}?exclude=[minutely,daily,alerts,flags,hourly]`)
        .then(resp=>{
          if (!resp.ok){ throw resp.statusText}
          return resp.json()
        })
        .then(data => {
            classCopy[index].weather = data.currently
            this.setState({
              locations: classCopy
            })
        })
        .catch(err =>{
          if (x<1){
            alert(`There was an issue connecting to the DarkSky API: ${err}`);
          }
          x++
        })
    }
  }

  render() {

    return (
      <div className="App">
        <NeighborhoodPage locations ={this.state.locations} />
      </div>
    );
  }
}
