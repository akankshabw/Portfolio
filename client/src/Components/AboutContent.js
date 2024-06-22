import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from 'react';
import Pic from "../assets/Akanksha.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
    <div className="card">
        <div className="left">
        <div className='details'>
            <h1>About me ?</h1>
            <p>I am a third year undergraduate in the department of Computer Science and Engineering at IIT Kanpur. I love exploring new things and learning new skills. My major interests are web development, machine learning and coding.</p>
            <Link to= "https://drive.google.com/file/d/1TX6x5C4u3OeAwWInCKtXoKCmoOf-fBKi/view">
            <button className="btn">RESUME</button>
            </Link>
        </div>
        </div>
        <div className="right">
            <div className="img-container">
                <img src={Pic} className="my_img" alt="true" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutContent;