import React, { useState, useRef } from "react";
import "./core-sections.css";

const SitemapSection = ({ imageSrc, title }) => {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Declara scrollableRef para el manejo del desplazamiento
  const scrollableRef = useRef(null); // Aquí es donde se inicializa

  // Funciones para manejar el zoom
  const zoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.2, 1));

  // Funciones para arrastrar la imagen
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - scrollableRef.current.scrollLeft,
      y: e.clientY - scrollableRef.current.scrollTop,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const { x, y } = dragStart.current;
    scrollableRef.current.scrollLeft = e.clientX - x;
    scrollableRef.current.scrollTop = e.clientY - y;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="zoom-container">
      <div
        className="scrollable"
        ref={scrollableRef}  /* Esto hace que scrollableRef sea accesible */
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="zoomable-image"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="controls">
        <button onClick={zoomIn}>+</button>
        <button onClick={zoomOut}>-</button>
      </div>
    </div>
  );
};

export default SitemapSection;
