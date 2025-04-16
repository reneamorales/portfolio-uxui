import react from "react";
import "./Footer.css";
import IconArrow from "./IconArrow";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo">
          <a href="#" aria-label="Homepage">
            rene.ux
          </a>
        </div>

        {/* Descripción */}
        <div className="footer__description">
          <div className="footer__description-purpose">
            <p>Impulsemos tus ideas juntos</p>
          </div>
          <div className="footer__description-goals">
            <p class="description">
              Diseño experiencias digitales centradas en el usuario,
              transformando conceptos en soluciones prácticas.
              <span class="highlight">¡Hagamos que tu proyecto destaque!</span>
            </p>

            <button className="footer__cta-button">
              Comencemos hablar <IconArrow />
            </button>
          </div>
        </div>
        <div className="footer__contact">
          
            {/* Redes sociales */}
            <div className="footer__social-media">
              <div className="footer__social-media-link">
                <a
                  href="https://www.instagram.com/renexusdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="footer__social-link footer__social-link--instagram"
                >
                  <img src="/resources/icons/instagram.svg" alt="Instagram" />
                </a>
                <a
                  href="https://www.instagram.com/renexusdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="footer__social-link footer__social-link--instagram"
                >
                  <img src="/resources/icons/linkedin.svg" alt="Instagram" />
                </a>
                <a
                  href="https://www.instagram.com/renexusdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="footer__social-link footer__social-link--instagram"
                >
                  <img src="/resources/icons/youtube.svg" alt="Instagram" />
                </a>
                <a
                  href="https://www.instagram.com/renexusdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="footer__social-link footer__social-link--instagram"
                >
                  <img src="/resources/icons/behance.svg" alt="Instagram" />
                </a>
              </div>
</div>
              {/* Línea divisoria */}
              <hr className="footer__divider" />
            

          <p className="footer__copy">
            {"\u00A9"} rene.ux 2024 | Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
