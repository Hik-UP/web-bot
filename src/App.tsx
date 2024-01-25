import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/Login';
import { BotPage } from './pages/Bot';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/bot" element={<BotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
