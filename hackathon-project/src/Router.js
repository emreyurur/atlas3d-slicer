import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WebHomepage from './pages/WebHomepage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<WebHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
