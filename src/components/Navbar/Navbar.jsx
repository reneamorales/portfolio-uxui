import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import Menu from "./Menu";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarState, setNavbarState] = useState("top"); // "top", "hidden", "scrolled-up"


  // Alternar estado del menú
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const vh = window.innerHeight;

          if (currentScroll === 0) {
            setNavbarState("top");
          } else if (currentScroll > vh && currentScroll > lastScrollY) {
            setNavbarState("hidden");
          } else if (currentScroll > vh && currentScroll < lastScrollY) {
            setNavbarState("scrolled-up");
          } else if (currentScroll <= vh) {
            setNavbarState("top");
          }
          lastScrollY = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú móvil si el ancho es mayor a 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Composición de clases más limpia
  const headerClass = [
    "navbar",
    navbarState === "top" && "navbar--top",
    navbarState === "scrolled-up" && "scrolled-up",
    navbarState === "hidden" && "navbar--hidden"
  ]
    .filter(Boolean)
    .join(" ");

  // React Router hooks para navegación y ubicación
  const location = useLocation();
  const navigate = useNavigate();

  // Handler para el brand
  const handleBrandClick = useCallback(() => {
    if (location.pathname === "/" || location.pathname === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <header className={headerClass}>
      <div className="logo">
        <a
          href="/"
          className="brand-btn"
          aria-label="Ir a la página principal"
          onClick={handleBrandClick}
        >
          rene.ux
        </a>
      </div>
      <nav role="navigation" className={`nav${isMenuOpen ? " active" : ""}`}>
        <NavLinks isActive={isMenuOpen} closeMenu={closeMenu} />
      </nav>
      <button
        id="menu"
        name="menu-button"
        className="oculto menu-button"
        type="button"
        aria-label="Abrir menú de navegación"
        aria-expanded={isMenuOpen}
        aria-controls="nav"
        onClick={toggleMenu}
      >
        <Menu />
      </button>
    </header>
  );
};
