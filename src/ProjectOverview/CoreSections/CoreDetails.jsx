
import React from "react";
import "./core-sections.css";
import {CoreSections}  from "./CoreSections";

export const CoreDetails = ({ content }) => {
  const contentArray = Object.values(content);

  return (
    <div className="project-details">
      {contentArray.map((section, index) => (
        <CoreSections
          key={index}
          {...section} // Esto pasa todas las claves del objeto `section` como props
        />
      ))}
    </div>
  );
};