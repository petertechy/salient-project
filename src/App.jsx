import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Work from './Component/Work';

function App() {
  return (
    <>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
