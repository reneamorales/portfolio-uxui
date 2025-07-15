import React from 'react';
import { Link } from "react-router-dom";
import './navbar-links.css';
import Cta from "./Cta";

export const NavLinks = ({ isActive, closeMenu }) => {
  return (
    <ul className={`nav-links ${isActive ? "active" : ""}`}>
      <li>
        <Link className="link" to="/about" onClick={closeMenu}>
          Sobre mí
        </Link>
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
