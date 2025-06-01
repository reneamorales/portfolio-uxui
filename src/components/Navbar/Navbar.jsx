import React, { useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control del menú móvil
  const [isTransparent, setIsTransparent] = useState(true); // Control de la transparencia

  // Alternar estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  // Detectar scroll para cambiar la transparencia
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isTransparent ? "transparent" : ""}`}>
      <div className="logo">
        <a href="#">rene.ux</a>
      </div>
      <nav className={isMenuOpen ? "active" : ""}>
        {/* Pasamos la función closeMenu como prop */}
        <NavLinks isActive={isMenuOpen} closeMenu={closeMenu} />
      </nav>
      <div className="cta">
        <a href="#hire-me" className="desactivar  desaparece btn btn-contact">
          Contactar
        </a>
      </div>
      <button
        id="burger"
        name="menu-button"
        className="oculto burger"
        type="button"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </header>
  );
};
