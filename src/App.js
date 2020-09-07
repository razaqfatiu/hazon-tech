import React from 'react';
// import './App.css';
import Header from './Component/Header';
import Intro from './Component/Intro';
import Features from './Component/Features';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import Newsletter from './Component/Newsletter';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
      <Services />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default App;
