import React, { useState, useRef } from "react";
import "./core-sections.css"; // Asegúrate de crear estilos específicos para esta funcionalidad

export const CoreSections = ({
  className,
  title,
  subtitle,
  description,
  imageSrc,
  iframeSrc,
}) => {
  // Estado para el zoom
  const [zoom, setZoom] = useState(1);
  // Referencia para el contenedor scrollable
  const scrollableRef = useRef(null);
  // Estado para el arrastre
  const [isDragging, setIsDragging] = useState(false);
  // Posición inicial del arrastre
  const dragStart = useRef({ x: 0, y: 0 });

  // Función para aumentar el zoom
  const zoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Zoom máximo 3x

  // Función para disminuir el zoom
  const zoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Zoom mínimo 1x

  // Manejador del evento de presionar el mouse
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - scrollableRef.current.scrollLeft,
      y: e.clientY - scrollableRef.current.scrollTop,
    };
  };

  // Manejador del evento de mover el mouse
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const { x, y } = dragStart.current;
    scrollableRef.current.scrollLeft = e.clientX - x;
    scrollableRef.current.scrollTop = e.clientY - y;
  };

  // Manejador del evento de soltar el mouse
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className={`section ${className || ""}`}>
      {title && <h2 className="section__title">{title}</h2>}
      {subtitle && <h3 className="design__process-title section__subtitle">{subtitle}</h3>}
      {description && <p className="section__description">{description}</p>}

      {/* Renderizar imagen con zoom y navegación */}
      {imageSrc && (
        <div className="zoom-container">
          <div
            className="scrollable"
            ref={scrollableRef}
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
      )}

    </section>
  );
};
