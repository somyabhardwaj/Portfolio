import React from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/projects';
 import './App.css';
import TypedAbout from './components/About/TypedAbout/TypedAbout';
import Foms from './components/Foms';

function App() {
  return (
   <>
   <Navbar />
  <TypedAbout />
  <Projects />
  <Foms />
   <About />
  

   </>
  );
}

export default App;
