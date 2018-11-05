import React,{Component} from 'react';
import ReactMapGL, {Marker, FlyToInterpolator} from 'react-map-gl';
import { MAP_TOKEN, MAP_STYLE } from '../keys/key';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faFrog } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

class Map extends Component{

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 35.50162777062601,
      longitude: 15.040026800069962,
      zoom: 1.4232929969965746
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
    this.setState({
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: viewport.lngLat[1],
        longitude: viewport.lngLat[0],
        zoom: 3.4232929969965746
      },
      lat: viewport.lngLat[1],
      lng: viewport.lngLat[0],
      region: viewport.features[0].properties.name_en,
      ismodel: false
    })
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
              latitude: 35.50162777062601,
              longitude: 15.040026800069962,
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
        <ReactMapGL
          className='mapGL'
          {...this.state.viewport}
          mapStyle={MAP_STYLE.dark}
          mapboxApiAccessToken={MAP_TOKEN}
          transitionDuration={1000}
          transitionInterpolator={new FlyToInterpolator()}
          onViewportChange={this.ChangeLocation}
          onClick={this.ClickLocation}
        >
          <Marker 
            latitude={this.state.lat}
            longitude={this.state.lng}
            offsetLeft={-10}
            offsetTop={-25}
          >
            <div>
            <FontAwesomeIcon className="marker" icon={faMapPin} size={'1x'} color={'#FE8128'}/>
            </div>
          </Marker>
        </ReactMapGL>
        <div className='model' hidden={this.state.ismodel}>
          <h4 onClick={this.ClickCloseModel}>X</h4>
          <div className='result'>
            <h1>{this.state.region}</h1>
            <button className='btn btn-outline-success rounded btn-block'>view trip</button>
            <button className='btn btn-success rounded btn-block'>about region</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Map;
