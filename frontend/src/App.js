import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TryUbuntu from './pages/TryUbuntu';
import Installation from './pages/Installation';
import Software from './pages/Software';
import Community from './pages/Community';
import WhyUbuntu from './pages/WhyUbuntu';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/try" element={<TryUbuntu />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/software" element={<Software />} />
          <Route path="/community" element={<Community />} />
          <Route path="/why-ubuntu" element={<WhyUbuntu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;