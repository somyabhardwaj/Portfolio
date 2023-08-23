import React from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/projects';
 import './App.css';
import TypedAbout from './components/About/TypedAbout/TypedAbout';
import Foms from './components/Foms';

function App() {
  return (
   <div className="Body-div">
   
   <Navbar />
  <TypedAbout />
  <Projects />
  <Foms />
   <About />
  

   </div>
  );
}

export default App;
