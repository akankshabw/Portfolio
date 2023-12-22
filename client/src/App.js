import React, { useState, useEffect } from "react";
// import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import {Route,Routes} from "react-router-dom";

function App() {

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    /* <div >
      <h1>{message}</h1>
    </div> */
  );
}

export default App;
