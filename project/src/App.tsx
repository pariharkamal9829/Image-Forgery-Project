import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Patents from './pages/Patents';
import Algorithms from './pages/Algorithms';
import Team from './pages/Team';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;