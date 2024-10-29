import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";
import React, { useState } from 'react';


import './NavBar.styles.scss'

const NavBar = () => {
    
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
      setIsMenuActive(!isMenuActive);
    };
    return (
      <div className="nav-bar">
        <a href="/">
          <ImageFrame
            src="/assets/images/Logo.jpeg"
            alt="Muebles OG"
            width="150" 
          />
          <div className="hamburger"></div>
        </a>
        <Menu />
        <NavUtils />
      </div>
    );
}

export { NavBar };
