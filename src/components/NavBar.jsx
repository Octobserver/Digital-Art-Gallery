import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../styles/NavBar.css';
import ReorderIcon from "@material-ui/icons/Reorder";
import logo from '../assets/logo.png';

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
              onClick={() => {
                setExpandNavbar((prev) => !prev);
              }}> 
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to='/'>HOME</Link>
            <Link to='/portfolio'>MY WORK</Link>
            <Link to='/shop'>SHOP</Link>
            <img src={logo} alt='Octavia Art' className="image-logo" />
            <Link to='/blog'>BLOG</Link>
            <Link to='/daily-challenge'>DAILY CHALLENGE</Link>
        </div>
    </div>
  );
}

export default NavBar;