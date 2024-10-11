import React from 'react';
import {GlobalStyle} from './components/GlobalElements.style'; // Import your global styles
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';

function App() {
  return (
    <>
      {/* Apply GlobalStyle */}
      <GlobalStyle />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
