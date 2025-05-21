import React, { useRef } from "react";
import PopUp from "./PopUp";
import redirectionImageDefault from "../../../img/redirection-default-fit.png";
import redirectionImageDesktop from "../../../img/redirection-desktop.png";
import redirectionImageTablet from "../../../img/redirection-tablet.png";
import redirectionImagePC from "../../../img/redirection-pc.png";

import "./redirection-section.css";

export const RedirectionSection = () => {
  const targetRef = useRef(null); // Crear la referencia para la sección objetivo

  return (
    <div ref={targetRef} className="redirection__container target-section">
      <div className="redirection__content">
        <picture>
          {/* Ordenar de mayor a menor resolución */}
          <source srcSet={redirectionImagePC} media="(min-width: 1680px)" />
          <source
            srcSet={redirectionImageDesktop}
            media="(min-width: 1025px)"
          />
          <source srcSet={redirectionImageTablet} media="(min-width: 768px)" />
          <source srcSet={redirectionImageDefault} media="(max-width: 767px)" />
          <img
            src={redirectionImageDesktop}
            alt="Redirection section illustration"
            loading="lazy"
            className="redirection__image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "fallback-image-path.png";
            }}
          />
        </picture>
        <PopUp targetRef={targetRef} /> {/* Pasar la referencia como prop */}
      </div>
    </div>
  );
};
