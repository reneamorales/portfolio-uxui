/* TipographySection.css */
import { useEffect } from "react";
import { DownloadCv } from "./DownloadCv";
import "./Hero.css";

export const Hero = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".typewriter-effect span");
    spans.forEach((span, i) => {
      span.style.animationDelay = `${2 + i * 0.4}s`;
    });
  }, []);

  return (
    <div className="hero-section">
      <span className="span-bg">Imagen no definitiva</span>
      <div className="animated-card">
        <h1 className="hero-title">¡Hola! Soy René, UX/UI Designer!</h1>
        <div className="container-description-btn">
          <p className="typewriter-effect">
            {[
              "Diseño",
              "experiencias",
              "digitales",
              "que",
              "conectan",
              "con",
              "las",
              "personas.",
              "Me",
              "enfoco",
              "en",
              "proyectos",
              "web,",
              "prototipos",
              "interactivos",
              "y",
              "soluciones",
              "que",
              "exploran",
              "el",
              "futuro",
              "de",
              "la",
              "tecnología.",
            ].map((word, index) => (
              <span key={index} className="typewriter-word">
                {word}
              </span>
            ))}
          </p>
          {/* Texto visible para lectores de pantalla y motores de búsqueda */}
          <p className="sr-only">
            Diseño experiencias digitales que conectan con las personas. Me
            enfoco en proyectos web, prototipos interactivos y soluciones que
            exploran el futuro de la tecnología.
          </p>
          <DownloadCv />
        </div>
      </div>
    </div>
  );
};
