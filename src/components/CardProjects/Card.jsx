import React, { forwardRef } from "react";
import "./Card.css";
import VideoPreview from "../VideoPreview/VideoPreview";

const Card = forwardRef(
  ({ title, description, videoSrc, projectLink, webLink, isActive }, ref) => {
    return (
      <article className={`project-card ${isActive ? "active" : ""}`} ref={ref}>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="btn-project">
            <a href={webLink} id="see-on-the-web" className="btn project-link">
              Ver en la web
            </a>
            <a
              href={projectLink}
              id="prototype-link"
              className="btn project-link"
            >
              Ver proyecto
            </a>
          </div>
        </div>
        <VideoPreview videoSrc={videoSrc} caption="Vista previa del proyecto" />
      </article>
    );
  }
);

export default Card;
