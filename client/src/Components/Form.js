import "./Form.css";
import React, { useState } from 'react';

const Form = () => {

  const [data,setData] = useState({});

  const handleChange = (e) =>{
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = await fetch("https://portfolio-backend-xeh4.onrender.com",{
      method:'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const new_data = await res.json();
  }

  return (
    <div className="form">
    <form onSubmit={(e) =>{
      handleSubmit(e);
      e.target.reset();
    } }>
        <label>Your Name</label>
        <input name="name" type="text" onChange={handleChange}></input>
        <label>Email</label>
        <input name="email" type="email" onChange={handleChange}></input>
        <label>Subject</label>
        <input name="subject" type="text" onChange={handleChange}></input>
        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type your message here" onChange={handleChange}/>
        <button className="btn" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form;