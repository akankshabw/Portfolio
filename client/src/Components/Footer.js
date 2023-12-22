import React from 'react';
import "./Footer.css";
import { FaHome, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
            <div className='location'>
               <h4><FaHome size={30} style={{color:"#fff", marginRight: "2rem"}}/></h4> 
                <div>
                    <p>Work Address : IIT Kanpur, UP</p>
                    <p>Home Address : Nanded, Maharashtra</p>
                </div>
            </div>
            <div className='email'>
               <h4><FaMailBulk size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                    akankshawattamwar4@gmail.com
                </h4> 
            </div>
        </div>
        <div className='right'>
            <h4>About me</h4>
            <p>This is me, Akanksha Wattamwar, student at Indian Institute of Technology, Kanpur. I am a coding enthusiast as well as I enjoy learning new skills.</p>
            <div className='social'>
                <a href="https://www.facebook.com/profile.php?id=100087070383220&mibextid=2JQ9oc"> <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} /></a>
                <a href="https://www.linkedin.com/in/akanksha-wattamwar-313a81276"><FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} /></a>
                <a href="https://t.me/abwiitk"><FaTelegram size={30} style={{color:"#fff", marginRight: "1rem"}} /></a>
                <a href="https://www.instagram.com/akanksha_._24?igshid=YzVkODRmOTdmMw=="><FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}} /></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;