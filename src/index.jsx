/* eslint-disable no-console */
// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

console.log(2);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
