import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const AppHomepage = () => {
  const [loading, setLoadingState] = useState(true);
  useEffect(() => setLoadingState(false), []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="homepage">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default AppHomepage;
