import React from "react";
import "./TipographySection.css";
import { AnimatedSectionTitle } from "../../../components/AnimatedSectionTitle/AnimatedSectionTitle";
import DesignProcessDescription from "../../DesignProcessDescription/DesignProcessDescription";
import PropTypes from "prop-types";
import { ItemFont } from "./ItemFont";
import { ItemFontContent } from "./ItemFontContent";
import { ItemParagraph } from "./ItemFontContent";

export const TipographySection = () => {
  return (
    <div className="design__process-container">
      <AnimatedSectionTitle className="section__subtitle">
        {ItemParagraph.title}
      </AnimatedSectionTitle>
      <DesignProcessDescription>{ItemParagraph.description}</DesignProcessDescription>
      <div className="tipography__section-inner">
        {ItemFontContent.map((font, index) => (
          <ItemFont
            key={index}
            type={font.type}
            name={font.name}
            abc={font.abc}
            numbers={font.numbers}
          />
        ))}
      </div>
    </div>
  );
};

TipographySection.propTypes = {
  paragraph: PropTypes.shape({
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
  }),
};
