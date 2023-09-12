import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Moviedetail from './Component/Moviedetails/Moviedetail';
import Home from './Component/Wrapper';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Moviedetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
