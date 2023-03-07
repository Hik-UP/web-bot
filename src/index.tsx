import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter /*basename={process.env.PUBLIC_URL}*/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
