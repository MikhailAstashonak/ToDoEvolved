import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundary from './utils/error-bounadary';

import store from './store';

render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
, document.getElementById('root'));
