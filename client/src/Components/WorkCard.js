import "./WorkCard.css";
import React from 'react';
import Blockchain from "../assets/Blockchain.jpg";
import Chirp from "../assets/Chirp.jpg";
import Decisionpro from "../assets/Decisionpro.jpg";

const WorkCard = (props) => {
  return (
            <div className="project-card">
                <img src={props.img} alt="image" className="proimage" />
                <h2 className="title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.content}</p>
                </div>
            </div>
  )
};


export default WorkCard;