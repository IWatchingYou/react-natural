import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MapView from '../views/MapView';

class IndexRoute extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={MapView} exact/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default IndexRoute;