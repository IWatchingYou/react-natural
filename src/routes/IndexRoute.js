import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from '../components/Map';

class IndexRoute extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Map} exact/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default IndexRoute;