import React from "react";
import { ToolsGrid } from "../ToolsGrid";
import "./design-tools.css";
import { designTools } from "./DesignToolItem";

export const DesignTools = () => {
  const renderDesignTool = (tool) => (
    <div key={tool.name} className="tool-container design-tool-container">
      <img src={tool.image} alt={tool.alt} className="tool-logo" />
      <div className="tool-text">
        <p className="tool-name">{tool.name}</p>
        <p className="tool-category">{tool.category}</p>
      </div>
    </div>
  );

  return (
    <ToolsGrid
      containerClassName="design-tools-section"
      title="Herramientas que potencian mi proceso"
      items={designTools}
      gridClassName="items-grid-design"
      renderItem={renderDesignTool}
      sectionId="skills" // id para scroll desde el navbar
    />
  );
};
