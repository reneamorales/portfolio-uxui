import React from "react";
import './Navbar.css';

export const NavLinks = ({ isActive, closeMenu }) => {
  return (
    <ul className={`nav-links ${isActive ? "active" : ""}`}>
      <li>
        <a className="link" href="#about" onClick={closeMenu}>
          Sobre mí
        </a>
      </li>
      <li>
        <a className="link" href="#projects" onClick={closeMenu}>
          Proyectos
        </a>
      </li>
      <li>
        <a className="link" href="#skills" onClick={closeMenu}>
          Habilidades
        </a>
      </li>
      <li>
        <a className="link" href="#contact" onClick={closeMenu}>
          Contacto
        </a>
      </li>
      <div className="cta">
        <a href="#hire-me" className="oculto btn btn-contact" onClick={closeMenu}>
          Contactar
        </a>
      </div>
    </ul>
  );
};
