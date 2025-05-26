import React from "react";
import "./code-tools.css";

export const CodeTools = () => {
  return (
    <div className="code-tools-section">
      <div className="code-tools-container">
        <h2 className="section-title">Herramientas de código</h2>
        <div class="logo-grid">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            class="logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            class="logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            class="logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            class="logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            class="logo"
          />
        </div>
      </div>
    </div>
  );
};
