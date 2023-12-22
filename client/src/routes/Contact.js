import React from 'react';
import Navbar from '../Components/Navbar';
import Main2 from '../Components/Main2';
import Footer from '../Components/Footer';
import Contactimg from "../assets/Contactimg.jpg";
import Form from "../Components/Form.js";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Main2 heading="CONTACT" content="Let's have some chat." img={Contactimg}/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact;