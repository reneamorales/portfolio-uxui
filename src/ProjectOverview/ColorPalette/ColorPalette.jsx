import React from "react";
import './ColorPalette.css';
import { ItemContent } from './ItemContent';
import { Color } from './Color'
import { ItemParagraph } from "./ItemContent";
export const ColorPalette = ({ titleSection }) => {
  return (
    <div className="design__process-container">
      <p className="design__process-title">{titleSection}</p>
      <div className="design__process-description">{ItemParagraph.description}</div>
      <div className="color__palette-inner">
        {ItemContent.map((item, index) => (
          <div key={index} className="color__palette-item-group">
            <p className="color__palette-subtitle">{item.title}</p>
            <div className="color__palette-colors">
              {item.colors.map((color, colorIndex) => (
                <Color
                  key={colorIndex}
                  name={color.name} // Nombre del color
                  hex={color.hex} // Código del color o gradiente
                  direction={color.direction}
                  textClass={color.textClass} // Clase de texto
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;