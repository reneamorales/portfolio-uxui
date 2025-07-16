import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import VideoPreview from "../VideoPreview/VideoPreview";

const Card = forwardRef(
  (
    {
      title,
      description,
      videoSrc,
      projectId,
      webLink,
      isActive,
      onProjectClick,
    },
    ref
  ) => {
    return (
      <article className={`project-card ${isActive ? "active" : ""}`} ref={ref}>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="btn-project">
            <a
              href={webLink}
              id="see-on-the-web"
              className="btn project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en la web
            </a>
            <Link
              to={`/projects/${projectId}`}
              id="prototype-link"
              className="btn project-link"
            >
              Ver proyecto
            </Link>
          </div>
        </div>
        <VideoPreview videoSrc={videoSrc} caption="Vista previa del proyecto" />
      </article>
    );
  }
);

export default Card;
