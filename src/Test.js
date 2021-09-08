import React from 'react';
import {Link, Route, Router} from 'react-router-dom';
import Actvie from './Active';
import Compo from './Compo';
import Home from './Home';


class Test extends React.Component{
  render() {
    return (
      <>
      <Router>
        <h1>
          test
        </h1>
        <Route path="/" component={Home}>
        </Route>
        <Route path="/active" component={Actvie}>
        </Route>
        <Route path="/component" component={Compo}>
        </Route>
        </Router>
      </>
    )
  }
}

export default Test