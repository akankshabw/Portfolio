import React from 'react';
import WorkCard from '../Components/WorkCard.js';
import SkillsCardData from './SkillsCardData.js';

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="project-heading">Technical Skills</h1>
      <div className="project-container-skills">
        {SkillsCardData.map((val,ind) =>{
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

export default Skills;