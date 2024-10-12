import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
