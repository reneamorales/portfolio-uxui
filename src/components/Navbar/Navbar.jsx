import React, { useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import Menu from "./Menu";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarState, setNavbarState] = useState("top"); // "top", "hidden", "scrolled-up"
  const [lastScroll, setLastScroll] = useState(0);

  // Alternar estado del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const vh = window.innerHeight;

          if (currentScroll === 0) {
            setNavbarState("top");
          } else if (
            currentScroll > vh &&
            currentScroll > lastScroll
          ) {
            // Bajando y pasó 100vh
            setNavbarState("hidden");
          } else if (
            currentScroll > vh &&
            currentScroll < lastScroll
          ) {
            // Subiendo y está después de 100vh
            setNavbarState("scrolled-up");
          } else if (currentScroll <= vh) {
            // Dentro del primer 100vh
            setNavbarState("top");
          }
          setLastScroll(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Cierra el menú móvil si el ancho es mayor a 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header
      className={`navbar
        ${navbarState === "top" ? "navbar--top" : ""}
        ${navbarState === "scrolled-up" ? "scrolled-up" : ""}
        ${navbarState === "hidden" ? "navbar--hidden" : ""}
      `}
    >
      <div className="logo">
        <a href="#">rene.ux</a>
      </div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
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
