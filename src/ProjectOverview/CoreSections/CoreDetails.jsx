import React from "react";
import "./core-sections.css";
import { CoreSections } from "./CoreSections";
import { CoreContent } from "./CoreContent";

export const CoreDetails = () => {
  return (
    <div className="project-details">
      {Object.values(CoreContent).map((content, index) => (
        <CoreSections
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
