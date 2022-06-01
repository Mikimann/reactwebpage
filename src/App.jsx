import React from 'react';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import "./App.scss";
import Testimonials from './components/Testimonials';



function App() {
 
  return (
    <div className="App">
    <Navbar />
    <div className="sections">
      <Intro />
      <Portofolio />
      <Testimonials/>
      <Contact />
    </div>
    </div>
  );
}

export default App;
