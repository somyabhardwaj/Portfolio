import React from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/projects';
 import './App.css';
import TypedAbout from './components/About/TypedAbout/TypedAbout';
import Foms from './components/Foms';
import Footer from './components/Footer';

function App() {
  return (

   <>
  <Navbar />
  <TypedAbout />
  <hr style={{margin:'0rem 11% 2rem 11%'}} />
 <Projects />
  <hr style={{margin:'4rem 11% 4rem 11%'}} />
  <Foms />
  <hr style={{margin:'4rem 11% 1rem 11%'}} />
  <About />
  <Footer />
  
</>

  );
}

export default App;
