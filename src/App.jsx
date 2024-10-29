import React, { useEffect } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Workexp from "./components/Workexp";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Lenis from 'lenis'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-full text-zinc-100 bg-zinc-900 font-[ff]">
      <Loader />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Workexp />
      <Educations />
      <Footer />
    </div>
  );
};

export default App;
