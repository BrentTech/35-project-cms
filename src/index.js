import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import CMS from './components/cms/cms.js';

import createStore from './store/';
const store = createStore();

/**
 *
 * Renders components to DOM and
 * provides Redux Store to inner
 * components.
 * @returns JSX Markup
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CMS />
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
