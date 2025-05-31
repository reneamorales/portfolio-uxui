import React from "react";
import { ToolsGrid } from "../ToolsGrid";
import "./code-tools.css";

export const CodeTools = () => {
  const tools = [
    { name: "HTML5", icon: "html5/html5-original.svg" },
    { name: "CSS3", icon: "css3/css3-original.svg" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
    { name: "React", icon: "react/react-original.svg" },
    { name: "GitHub", icon: "github/github-original.svg" },
  ];

  const renderCodeTool = (tool) => (
    <div key={tool.name} className="tool-container code-tool-container">
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.icon}`}
        alt={tool.name}
        className="tool-logo code-tool-logo"
      />
      <span className="tool-name">{tool.name}</span>
    </div>
  );

  return (
    <ToolsGrid
      containerClassName="code-tools-section"
      title="Lenguajes y herramientas que domino"
      items={tools}
      gridClassName="items-grid-code"
      renderItem={renderCodeTool}
    />
  );
};