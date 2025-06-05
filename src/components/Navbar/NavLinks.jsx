import React from "react";
import './navbar-links.css';
import Cta from "./Cta";

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
     <Cta closeMenu={closeMenu} />
    </ul>
  );
};
