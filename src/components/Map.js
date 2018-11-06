import React,{Component} from 'react';
import ReactMapGL, {Marker, FlyToInterpolator} from 'react-map-gl';
import { MAP_TOKEN, MAP_STYLE } from '../keys/key';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faPaw } from '@fortawesome/free-solid-svg-icons';

class Map extends Component{

  state = {
    trip: [
      {
        triplat: 40.62814735435261,
        triplng: -97.27910749901017
      },
      {
        triplat: 47.54614448591646,
        triplng: 2.9403004877876118
      },
      {
        triplat: 35.483570889404966,
        triplng: 101.79022489729036
      },
      {
        triplat: 12.531583585817407,
        triplng: 105.16354087333109
      },
      {
        triplat: 36.18834655682486,
        triplng: 138.75832062285411
      }
    ]
  }

  render(){

    const tripPlace = this.state.trip.map(res => {
      return(
        <Marker 
          key={res.triplat+res.triplng}
          latitude={res.triplat}
          longitude={res.triplng}
          offsetLeft={-10}
          offsetTop={-10}
        >
          <div>
          <FontAwesomeIcon icon={faPaw} size={'1x'} color={'#28a745'}/>
          </div>
        </Marker>
      )
    })

    return(
      <ReactMapGL
        className='mapGL'
        width={window.outerWidth}
        height={window.outerHeight}
        {...this.props.viewport}
        mapStyle={MAP_STYLE.dark}
        mapboxApiAccessToken={MAP_TOKEN}
        transitionDuration={500}
        transitionInterpolator={new FlyToInterpolator()}
        onViewportChange={this.props.ChangeLocation}
        onClick={this.props.ClickLocation}
      >
        {tripPlace}
        <Marker 
          latitude={this.props.lat}
          longitude={this.props.lng}
          offsetLeft={-10}
          offsetTop={-10}
        >
          <div>
          <FontAwesomeIcon className="marker" icon={faMale} size={'1x'} color={'#FE8128'} data-toggle="tooltip" data-placement="left" title="you here"/>
          </div>
        </Marker>
      </ReactMapGL>
    )
  }
}

export default Map;
