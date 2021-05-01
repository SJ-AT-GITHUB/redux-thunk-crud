import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

ReactDOM.render(
  <ReduxProvider store={configureStore([])}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);
