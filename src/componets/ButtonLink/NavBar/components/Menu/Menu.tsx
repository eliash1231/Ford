
import React, { useState } from 'react';
import './Menu.styles.scss';

const Menu = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="navbar-menu-container">
      {/* Icono de hamburguesa para activar el menú */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* El menú se mostrará cuando se active */}
      <div className={`navbar-menu ${isMenuActive ? 'menu-active' : ''}`}>
        <a href="/dormitorios-modernos">DORMITORIOS MODERNOS</a>
        <a href="/comedores-modernos">COMEDORES MODERNOS</a>
        <a href="/centro-entretenimiento">CENTRO DE ENTRETENIMIENTO</a>
        <a href="/mesitas-modernas">MESITAS MODERNAS</a>
      </div>
    </div>
  );
};

export { Menu };
