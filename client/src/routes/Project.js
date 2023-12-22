import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Main2 from "../Components/Main2.js";
import Projectimg from "../assets/Projectimg.jpg";
import Work from "../Components/Work.js";


const Project = () => {
  return (
    <div>
      <Navbar />
      <Main2 heading="PROJECTS" content="Some of my most recent works." img={Projectimg}/>
      <Work />
      <Footer />
    </div>
  )
}

export default Project;