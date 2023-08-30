import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header.jsx';
import HomePage from './Pages/HomePage.js';
import Footer from './Components/Footer.jsx';

import './Styles/Index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;