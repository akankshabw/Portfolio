import "./WorkCard.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
            <div className="project-card">
                <img src={props.img} alt="image" className="proimage" />
                <div className="project-details">
                <h2 className="title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.content}</p>
                </div>
                </div>
                <div className='github'>
                <NavLink to={props.link} className="btn">view</NavLink>
                </div>
                
            </div>
  )
};


export default WorkCard;