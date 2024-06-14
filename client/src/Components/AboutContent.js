import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from 'react';
import Log from "../assets/IIT-Kanpur.jpg";
import Lib from "../assets/Lib.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I am a sophomore in the department of Computer Science and Engineering at IIT Kanpur. I love exploring new things and learning new skills. My major interests are web development, machine learning and coding.</p>
        <Link to= "/contact">
        <button className="btn">RESUME</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Lib} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={Log} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;