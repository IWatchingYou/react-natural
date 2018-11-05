import React,{Component} from 'react';
import ReactMapGL, {Marker, FlyToInterpolator} from 'react-map-gl';
import { MAP_TOKEN, MAP_STYLE } from '../keys/key';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

class Map extends Component{
  render(){
    return(
      <ReactMapGL
        className='mapGL'
        {...this.props.viewport}
        mapStyle={MAP_STYLE.dark}
        mapboxApiAccessToken={MAP_TOKEN}
        transitionDuration={1000}
        transitionInterpolator={new FlyToInterpolator()}
        onViewportChange={this.props.ChangeLocation}
        onClick={this.props.ClickLocation}
      >
        <Marker 
          latitude={this.props.lat}
          longitude={this.props.lng}
          offsetLeft={-10}
          offsetTop={-25}
        >
          <div>
          <FontAwesomeIcon className="marker" icon={faMapPin} size={'1x'} color={'#FE8128'}/>
          </div>
        </Marker>
      </ReactMapGL>
    )
  }
}

export default Map;
