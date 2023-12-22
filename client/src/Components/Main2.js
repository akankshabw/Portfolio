import React from 'react';
import "./Main.css";
import Projectimg from "../assets/Projectimg.jpg";
import Contactimg from "../assets/Contactimg.jpg";
import Aboutimg from "../assets/Aboutimg.jpg";

export const Main2 = (props) => {
  return (
    <div className="Main">
        <div className="back">
            <img className="intro-img" src={props.img} alt="Image" />
        </div>
        <div className="content-project">
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
        </div>
    </div>
  );
}

export default Main2;