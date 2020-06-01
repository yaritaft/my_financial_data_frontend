import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Add Router
import { BrowserRouter } from 'react-router-dom'

// Add style
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
