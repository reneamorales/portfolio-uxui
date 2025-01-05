import React, { useRef } from 'react';
import PopUp from './PopUp';
import redirectionImageDefault from "../../img/redirection-default-fit.png";
import redirectionImageDesktop from "../../img/redirection-desktop.png";
import redirectionImageTablet from "../../img/redirection-tablet.png";

import "./redirection-section.css";

export const RedirectionSection = () => {
    const targetRef = useRef(null); // Crear la referencia para la sección objetivo

    return (
        <div ref={targetRef} className="redirection__container target-section">
            <div className="redirection__content">
                <picture>
                    
                    <source srcset={redirectionImageDefault} media="(max-width: 767px)" />
                    <source
                        srcset={redirectionImageTablet}
                        media="(min-width: 768px) and (max-width: 1024px)"
                    />
                    <source srcset={redirectionImageDesktop} media="(min-width: 1025px)" />
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
}


