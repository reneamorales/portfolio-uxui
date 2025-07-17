import React from "react";
import { Suspense, memo } from "react";
import PropTypes from "prop-types";
import "./alternating-process-grid.css";
import VideoPreview from "../../../components/VideoPreview/VideoPreview";
import ImageSliderAuto from "./ImageSliderAuto.jsx";
import { AnimatedSectionTitle } from "../../../components/AnimatedSectionTitle/AnimatedSectionTitle";

export const AlternatingProcessGrid = memo(({ content }) => {
  if (!content) return null;

  return (
    <div className="second__grid-container">
      <AnimatedSectionTitle className="section__subtitle">{content?.title}</AnimatedSectionTitle>
      <Suspense fallback={<div>Loading...</div>}>
        {content?.item?.map((item, indexItem) => (
          <div
            key={`grid-item-${indexItem}`}
            className={`second__grid-inner ${
              indexItem % 2 === 1 ? "reverse" : ""
            }`}
          >
            {/* Renderiza video si hay videoSrc, si no, imagen */}
            {item.videoSrc ? (
              <div className="video-container">
                {/* TODO: Reemplazar por componente de video definitivo */}
                <p>Reproductor aquí</p>
              </div>
            ) : (
              <ImageSliderAuto images={item.images} />
            )}
            <div className="design-process-description--md second__grid-descriptions">
              {item.description}
            </div>
          </div>
        ))}
      </Suspense>
    </div>
  );
});

AlternatingProcessGrid.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    item: PropTypes.arrayOf(
      PropTypes.shape({
        videoSrc: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string), // <- agregá esto
        description: PropTypes.node.isRequired,
      })
    ),
  }),
};

AlternatingProcessGrid.displayName = "AlternatingProcessGrid";
