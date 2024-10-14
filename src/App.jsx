import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Work from './Component/Work';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import SecondPortfolio from './Component/SecondPortfolio';
import About from './Component/About';

function App() {
  return (
    <>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolioDetails" element={<SecondPortfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
