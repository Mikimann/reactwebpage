import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
