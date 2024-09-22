import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Onboarding from './pages/Onboarding/Onboarding';
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Onboarding />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;