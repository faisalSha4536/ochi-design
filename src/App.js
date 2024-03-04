import React, { useEffect } from 'react';
import './App.scss';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import Brand from './pages/Brand';
import Eyes from './pages/Eyes';
import Projects from './pages/Projects';
import Review from './pages/Review';
import StartProject from './pages/StartProject';
import Footer from './pages/Footer';


function App() {
  const scroll = new LocomotiveScroll()

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand/>
      <Eyes/>
      <Projects/>
      <Review/>
      <StartProject/>
      <Footer/>
    </div>
  );
}

export default App;
