import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from 'core/store';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from 'components/Layout';
import { routes } from './core/routes';
import { createBrowserHistory } from 'history';
import './index.css';
import './normalize.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {routes?.map((route, k) => (
          <PublicRoute path={route.path} component={route.component} key={k} exact={!!route.exact} />
        ))}
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root'),
);

// Activate the basic PWA, we need edit the service worker to manage the progressive web application, like push notifications
// You can see the google developers documentation to do this
serviceWorker.register();
