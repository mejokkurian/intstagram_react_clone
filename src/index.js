import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
