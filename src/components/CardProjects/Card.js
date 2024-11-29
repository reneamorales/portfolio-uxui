// src/components/CardProjects/Card.js
import React from "react";
import "./Card.css";
import VideoPreview from "../VideoPreview/VideoPreview"; // Ajusta la ruta según dónde lo creaste

const Card = ({ title, description, videoSrc, projectLink, webLink }) => {
  return (
    <article className="project-card">
      <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
        <div className="btn-project">
          <a href={webLink}
            id="see-on-the-web" className="btn project-link">Ver en la Web</a>
          <a href={projectLink} id="prototype-link" className="btn project-link">Ver Proyecto</a>
        </div>
      </div>
      <VideoPreview videoSrc={videoSrc} caption="Vista previa del proyecto" />
    </article>
  );
};

export default Card;
