import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './routes/App';
import 'modern-normalize';
import 'styles/base.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TaskPro-FrontEnd-Team12">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
