import React, { useState, useEffect } from 'react';
import './Nav.css';
import image from './images/streamvista-high-resolution-logo.png'

function Nav() {
  
  const [show,handleShow] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true);
      }
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",handleShow);
    };
  },[]);  

  return (
    <div className={`nav ${show && "nav_black"}`}>
       <img
         className="nav_logo"
         src={image}
         alt="Netflix logo"
       />
    </div>
  )
}
export default Nav;