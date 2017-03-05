import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './react/app';
import About from './react/app/about';
import Projects from './react/app/projects';
import Cover from './react/app/cover';
import Team from './react/app/team';
import Contact from './react/app/contact';
import Gallery from './react/app/gallery';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  )
}

export default Routes;
