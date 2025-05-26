import React, { useRef, useEffect } from "react";
import "./code-tools.css";

export const CodeTools = () => {
  const tools = [
    { name: "HTML5", icon: "html5/html5-original.svg" },
    { name: "CSS3", icon: "css3/css3-original.svg" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
    { name: "React", icon: "react/react-original.svg" },
    { name: "GitHub", icon: "github/github-original.svg" },
  ];

  return (
    <div className="code-tools-section">
      <div className="code-tools-container">
        <h2 className="section-title">Herramientas de código</h2>
        <div className="logo-grid">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="tool-container"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.icon}`}
                alt={tool.name}
                className="logo"
              />
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
