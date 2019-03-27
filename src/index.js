import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import initialDispatches from './redux/initial-dispatches';
import InitialLoading from './components/pages/initial-loading';
import Router from './routing/router';
import './scss/main.scss';

(async () => {
  // initial loading indicator
  const targetContainer = document.getElementById('app');
  render(<InitialLoading />, targetContainer);

  // initializing redux
  const store = createStore();
  await initialDispatches(store);

  // initializing application
  const { envVars } = store.getState().settings;
  render(
    <Provider store={store}>
      <Router basename={envVars.basename} />
    </Provider>,
    targetContainer,
  );

  if (process.env.NODE_ENV === 'development') {
    module.hot.accept();
  }
})();
