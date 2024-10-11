import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using 'client' here for React 18
// import '../src/assets/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router components
import App from './App'; // Your main App component
import './index.css'

// Create the root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside BrowserRouter for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
