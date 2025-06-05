import React, { useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import Menu from "./Menu";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control del menú móvil
  const [isTransparent, setIsTransparent] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  // Alternar estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll === 0) {
        // Si estamos en el top de la página
        setIsTransparent(true);
      } else if (currentScroll < lastScroll) {
        // Si estamos scrolleando hacia arriba
        setIsTransparent(false); // Aplicamos el fondo con transparencia
      } else {
        // Si estamos scrolleando hacia abajo
        setIsTransparent(true); // Mantenemos transparente
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
    <header className={`navbar ${isTransparent ? "transparent" : ""}`}>
      <div className="logo">
        <a href="#">rene.ux</a>
      </div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        {/* Pasamos la función closeMenu como prop */}
        <NavLinks isActive={isMenuOpen} closeMenu={closeMenu} />
      </nav>
      <button
        id="menu"
        name="menu-button"
        className="oculto menu-button"
        type="button"
        onClick={toggleMenu}
      >
        <Menu />
      </button>
    </header>
  );
};
