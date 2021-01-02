import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        {routes.map((props) => (
          <Route key={props.path} exact {...props} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
