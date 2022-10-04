import React from 'react';

// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ThankYou } from './pages';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="ty" element={<ThankYou />} />
        </Route>
        </Routes>
      </div>
    </Router>

  )
}

export default App