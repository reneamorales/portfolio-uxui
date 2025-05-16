import { useEffect, useState } from "react";
import "./Image-slider-auto.css";


const ImageSliderAuto = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3 segundos

    return () => clearInterval(interval); // Limpieza al desmontar
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageSliderAuto;