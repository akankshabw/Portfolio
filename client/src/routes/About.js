import React from 'react';
import Navbar from '../Components/Navbar';
import Main2 from '../Components/Main2';
import Footer from '../Components/Footer';
import Aboutimg from "../assets/Aboutimg.jpg";
import Course from "../Components/Course.js";


const About = () => {
  return (
    <div>
      <Navbar />
      <Main2 heading="ABOUT ME" content="Know more about me." img={Aboutimg}/>
      
      <Course />
      <Footer />
    </div>
  )
}

export default About;