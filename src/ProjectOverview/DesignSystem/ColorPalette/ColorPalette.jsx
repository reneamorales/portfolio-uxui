import React from "react";
import './ColorPalette.css';
import PropTypes from 'prop-types';
import { ItemContent, ItemParagraph } from './ItemContent';
import { Color } from './Color'

export const ColorPalette = () => {
  return (
    <div className="design__process-container">
      <p className="design__process-title">{ItemParagraph.title}</p>
      <div className="design__process-description">{ItemParagraph.description}</div>
      <div className="color__palette-inner">
        {ItemContent.map((item, index) => (
          <div key={index} className="color__palette-item-group">
            <p className="color__palette-subtitle">{item.title}</p>
            <div className="color__palette-colors">
              {item.colors.map((color, colorIndex) => (
                <Color
                  key={colorIndex}
                  name={color.name} 
                  hex={color.hex} 
                  direction={color.direction}
                  textClass={color.textClass} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ColorPalette.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        item: PropTypes.arrayOf(
            PropTypes.shape({
                imageSrc: PropTypes.string.isRequired,
                description: PropTypes.node.isRequired // <- Permite texto, JSX, elementos React
            })
        )
    })
}

export default ColorPalette;