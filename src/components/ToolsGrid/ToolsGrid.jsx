import React from "react";
import "./tools-grid.css";

export const ToolsGrid = ({
  containerClassName,
   title,
  items,
  gridClassName,
  renderItem
}) => {
  return (
    <section className={`tools-section ${containerClassName}`}>
      <div className="tools-container">
        <h2 className="section-title">{title}</h2>
        <div className={`items-grid ${gridClassName}`}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
};

{/*itemClassName, posiblemente props del otro elemento codetools*/}