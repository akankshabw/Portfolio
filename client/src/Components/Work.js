import React from 'react';
import WorkCard from '../Components/WorkCard.js';
import ProjectCardData from './ProjectCardData.js';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val,ind) =>{
            return (<WorkCard 
                key={ind}
                img = {val.img}
                title = {val.title}
                content = {val.content}
            />)
        })}
      </div>
      </div>
  )
}

export default Work;