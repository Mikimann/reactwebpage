import React from 'react';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import "./App.scss";



function App() {
 
  return (
    <div className="App">
    <Navbar />
    <div className="sections">
      <Intro />
      <Portofolio />
      <Contact />
    </div>
    </div>
  );
}

export default App;
