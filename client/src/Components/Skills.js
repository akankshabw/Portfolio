import React from 'react';
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container" >
    <div className="main-container-skills">

          <h1 className="skill-heading">Technical Skills</h1>
      
        <div className="sub-container">
          <div className="skill-card">
            <div className="type">Utilities</div>
            <div className="skill">Git, Bash, Latex</div>
          </div>
          <div className="skill-card">
            <div className="type">Web Development</div>
            <div className="skill">HTML, CSS, JS, React.js, Node.js, Express.js, MongoDB</div>
          </div>
          <div className="skill-card">
            <div className="type">Programming Languages</div> 
            <div className="skill">C, C++, Python, Javascript</div>
          </div>
          <div className="skill-card">
            <div className="type">Python Libraries I explored</div> <div className="skill">Numpy, Pandas, Matplotlib, Seaborn, Librosa, Sklearn, Py-Torch, Spacy, Tensorflow, FastAPI</div>
          </div>
        </div>
    </div>
      </div>

  )
}

export default Skills;