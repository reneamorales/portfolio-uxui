import React from "react";
import "./Section1.css";
import { Section } from "./Section1";
import { projectContent } from "./ProjectContent";

export const ProjectDetails = () => {
  return (
    <div className="project-details">
      {Object.values(projectContent).map((content, index) => (
        <Section
          key={index}
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          className={content.className}
          imageSrc={content.imageSrc}
        />
      ))}
    </div>
  );
};
