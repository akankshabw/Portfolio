import { NavLink } from "react-router-dom";
import "./Course.css";
import React from 'react';

const CourseCard = (props) => {
  return (
    <div className="course-card">
        <h2 className="title">{props.title}</h2>
        <div className="course-details">
            <p>{props.content}</p>
            <div className="course-btns">
                <NavLink to={props.url} className="btn">View</NavLink>
            </div>
        </div>
    </div>
  )
};

export default CourseCard;