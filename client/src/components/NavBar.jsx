import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../styles/NavBar.css';
import ReorderIcon from "@material-ui/icons/Reorder";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
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
            <Menu className="dropdown" placement='bottom'>
              <MenuButton className="dropdown" as={Button} border={0} rightIcon={<ChevronDownIcon />}>
                SHOP
              </MenuButton>
              <MenuList className="dropdown" zIndex={1}>
                <MenuItem border={0}> 
                  <Link to='/commission'>Commission</Link>
                </MenuItem>
                <MenuItem border={0}> 
                  <Link to='/shop'>Prints</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <img src={logo} alt='Octavia Art' className="image-logo" />
            <Link to='/blog'>BLOG</Link>
            <Link to='/daily-challenge'>DAILY CHALLENGE</Link>
        </div>
    </div>
  );
}

export default NavBar;