import React, { useEffect, useRef, useState } from "react";
import Card from "../CardProjects/Card";
import { projectData } from "./projectData";
import "./Projects.css";

export const Projects = ({ onProjectClick }) => {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-84px 0px", // Ajustado al height de la navbar
      threshold: [0.6],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target);

        setActiveIndices((prev) => {
          const newSet = new Set(prev);
          if (entry.isIntersecting) {
            newSet.add(index);
          } else {
            newSet.delete(index);
          }
          return newSet;
        });
      });
    }, options);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-list">
          {projectData.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
              webLink={project.webLink}
              projectLink={project.projectLink}
              caption={project.caption}
              ref={(el) => (cardRefs.current[index] = el)}
              isActive={index}
              onProjectClick={onProjectClick ? () => onProjectClick(index) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
