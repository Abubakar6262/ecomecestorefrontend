import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Header from './components/Header'
import About from "./About";
import Support from "./Support";
import Footer from './components/Footer'

function index() {
  return (
<>
<Header/>
<main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
    </Routes>
</main>
<Footer/> 

</>
  );
}

export default index;
