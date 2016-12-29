import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './react/app';
import About from './react/app/about';
import Projects from './react/app/projects';
import Cover from './react/app/cover';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Cover} />
        <Route path="about" component={About} />
        <Route path="projects" component={Projects} />
        <Route path="*" component={Cover} />
      </Route>
    </Router>
  )
}

export default Routes;
