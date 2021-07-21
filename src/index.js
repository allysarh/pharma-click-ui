import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/fluent-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
// import 'primeflex/primeflex.css';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Reducers } from './reducer';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const globalStore = createStore(Reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)))

ReactDOM.render(
  <Provider store={globalStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


reportWebVitals();
