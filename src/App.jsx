import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Moviedetail from './Component/Moviedetails/Moviedetail';
import Home from './Component/Wrapper';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

  
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader">
      <section className='flex justify-center items-center space-x-6'>
        <div className='h-[1rem] w-[1rem] rounded-full bg-rose-700 animate-bounce'></div>
        <div className='h-[1rem] w-[1rem] rounded-full bg-rose-700 animate-bounce'></div>
        <div className='h-[1rem] w-[1rem] rounded-full bg-rose-700 animate-bounce'></div>
      </section>
    </div>; 
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Moviedetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
