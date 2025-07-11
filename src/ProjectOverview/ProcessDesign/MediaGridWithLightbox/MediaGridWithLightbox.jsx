import { useState } from "react";
import { Item } from "../GridWireframes/Item"; 
import Lightbox from "./Lightbox/Lightbox";

import { AnimatedSectionTitle } from "../../../components/AnimatedSectionTitle/AnimatedSectionTitle";

export const MediaGridWithLightbox = ({ content }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState("");

  const openLightbox = (imageSrc) => {
    setCurrentImageSrc(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImageSrc("");
  };

  return (
    <div className="grid-container"> 
      <div className="grid-item">
       <AnimatedSectionTitle className="section__subtitle">
          {content.title}
        </AnimatedSectionTitle>

        <div className="grid"> 
          {content.item.map((item, index) => (
            <Item
              key={index}
              imageSrc={item.imageSrc}
              
              onImageClick={() => openLightbox(item.imageSrc)}
            />
          ))}
        </div>

        
      </div>

      {isLightboxOpen && (
        <Lightbox imageSrc={currentImageSrc} onClose={closeLightbox} />
      )}
    </div>
  );
};