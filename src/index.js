import React from 'react';
import ReactDOM from 'react-dom';
import {ReactProvider} from "./states/providers/ktp";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <ReactProvider>
          <App />
      </ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
reportWebVitals();
