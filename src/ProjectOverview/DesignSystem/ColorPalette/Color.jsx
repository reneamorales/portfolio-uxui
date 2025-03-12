import React from 'react';
import './ColorPalette.css';
import './ColorPalette.jsx';

export const Color = ({name, hex, textClass, direction }) => {
  // Detecta si es un gradiente
  const isGradient = hex.includes("→");
  const gradientDirection = direction || "to right"; // Dirección predeterminada
  const backgroundStyle = isGradient
    ? `linear-gradient(${gradientDirection}, ${hex.split("→").join(",")})`
    : hex; // Usa gradiente o color sólido

  return (
    <div className="item__container">
      <div
        className="item__color"
        style={{
          background: backgroundStyle,
        }}
        aria-label={name || hex} // Para accesibilidad
      >
        <label className={`item__hexa ${textClass || ""}`}>{hex}</label>
      </div>
     
    </div>
  );
};

  
