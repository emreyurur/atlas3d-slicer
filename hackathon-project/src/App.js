import React from 'react';
import Router from "./Router"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
      <><Toaster
          position="top-right"
          reverseOrder={false} /><Router /></>
  );
}

export default App;