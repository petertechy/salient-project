import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';

function App() {
  return (
    <>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
