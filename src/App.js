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
 <Projects />
  <hr style={{margin:'4rem 10rem 4rem 10rem'}} />
  <Foms />
  <hr style={{margin:'4rem 10rem 1rem 10rem'}} / >
  <About />
  <Footer />
  
</>

  );
}

export default App;
