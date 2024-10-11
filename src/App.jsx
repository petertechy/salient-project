import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
