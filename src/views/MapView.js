import React, { Component } from 'react';
import Map from '../components/Map';
import Region from '../components/Region';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

class MapView extends Component{

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 0,
      longitude: 0,
      zoom: 0
    },
    lat: 0,
    lng: 0,
    region: '',
    ismodel: true
  }

  ChangeLocation = (viewport) => { 
    this.setState({viewport})
  }

  ClickLocation = (viewport) =>{
    if(viewport.features[0].properties.name_en !== undefined){
      this.setState({
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          latitude: viewport.lngLat[1],
          longitude: viewport.lngLat[0],
          zoom: 3
        },
        lat: viewport.lngLat[1],
        lng: viewport.lngLat[0],
        region: viewport.features[0].properties.name_en,
        ismodel: false
      })
    }
    else{
      this.getGeoLocation();
    }
  }

  ClickCloseModel = () =>{
    this.getGeoLocation();
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator
      .geolocation
      .getCurrentPosition( position => {
          this.setState({
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
              latitude: 35,
              longitude: 15,
              zoom: 1.4232929969965746
            },
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            ismodel: true
          })
        }
      )
    }
  }

  componentWillMount(){
    this.getGeoLocation();
  }

  render(){
    return(
      <div>
        <div className='logo'>
          <FontAwesomeIcon icon={faFrog} color={'#FE8128'} size={'2x'}/>
          <h1>Natural</h1>
        </div>
        <Map
          viewport={this.state.viewport}
          ChangeLocation={this.ChangeLocation}
          ClickLocation={this.ClickLocation}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <Region
          ismodel={this.state.ismodel}
          region={this.state.region}
          ClickCloseModel={this.ClickCloseModel}
        />
      </div>
    )
  }
}

export default MapView;