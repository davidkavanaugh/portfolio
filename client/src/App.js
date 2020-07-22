import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.scss';

function App() {
 return (
   <React.Fragment>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      {/* <Blog /> */}
      <Contact />
    </React.Fragment>   
 );
}
 
export default App;