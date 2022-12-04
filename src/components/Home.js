import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from './Hero';
import About from './About';
import Members from './Members';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Members />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
