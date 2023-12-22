import "./Main.css";
import React from 'react';
import Home from "../assets/Home.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="Main">
        <div className="back">
            <img className="intro-img" src={Home} alt="Intro-Image" />
        </div>
        <div className="content-project">

            <h1>Hello World!!</h1>
            <p>Welcome to my website, a portfolio worth exploring...</p>
            <p></p>
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
        </div>
    </div>
  );
}

export default Main;