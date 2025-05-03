import React from "react";

export const Item = ({ imageSrc, subtitle, description }) => {
  return (
    <div className="grid__item">
      <img
        className="grid__item-image"
        src={imageSrc}
        alt={subtitle ? `${subtitle} image` : "Grid item"}
      />
      {subtitle && <p className="grid__item-subtitle">{subtitle}</p> || ""}
      {description && <p className="grid__item-description">{description}</p> || ""}
    </div>
  );
};
