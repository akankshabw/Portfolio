import React from 'react';
import Navbar from '../Components/Navbar';
import Main from "../Components/Main.js";
import Footer from "../Components/Footer.js";
import AboutContent from '../Components/AboutContent.js';
import Skills from '../Components/Skills.js';
//rafce

const Home = () => {
  return (
    <div>
    <Navbar />
    <Main />
    <AboutContent />
    <Skills />
    <Footer />
    </div>
  )
}

export default Home;