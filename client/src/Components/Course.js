import React from 'react';
import CourseCard from './CourseCard';
import CourseData from './CourseData';

const Course = () => {
  return (
    <div className="course-container" >
        <h1 className="course-heading">Courses Taken</h1>
        <div className="main-container">
        {CourseData.map((val,ind) => {
            return (
                <CourseCard 
                key={ind}
                title = {val.title}
                url = {val.url}
                content = {val.content}
                />
            );
        })}
        </div>
      </div>
  )
}

export default Course;