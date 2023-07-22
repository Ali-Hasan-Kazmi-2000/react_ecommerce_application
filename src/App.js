import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Customize from './components/Customize';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <section id="header">
        <Header />
      </section>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/customize/:id" element={<Customize />} />
      </Routes>

    </Router>
  );
}

export default App;
