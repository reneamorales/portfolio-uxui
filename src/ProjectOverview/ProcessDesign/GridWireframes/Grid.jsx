import React from "react";
import { useEffect } from "react";
import "./Grid.css";
import { Item } from "./Item";
import VideoPreview from "../../../components/VideoPreview/VideoPreview";

export const Grid = ({ content }) => {

  useEffect(() => {

    const titles = document.querySelectorAll(".design__process-title");

    const opcionesObservador = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.5, 1], // Múltiples umbrales para una animación más suave

    };

    const observador = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          // Remover clase cuando el elemento sale del viewport
          entry.target.classList.remove("active");
        }
      });
    }, opcionesObservador);

    // Prevenir observación si no hay títulos

    if (titles.length > 0) {
      titles.forEach((title) => observador.observe(title));
    }


    return () => {

      if (titles.length > 0) {
        titles.forEach((title) => observador.unobserve(title));
        observador.disconnect(); // Desconectar observador al desmontar
      }
    };

  }, []);

  return (
    <div className="grid-container">
      <div className="grid-item">
        <h2 className="design__process-title">{content.title}</h2>
        <div className="design__process-description"></div>
        {content.descriptionTop}
        <div className="grid">
        
        {content.item.map((item, indexItem) => {
          // Lógica condicional por tipo de item
          if (item.type === "video") {
            return (
              <VideoPreview 
              key={indexItem}
              videoSrc={item.videoSrc}
              caption={item.caption || ""}/>
            );
          }

          // Por defecto, asumimos que es imagen
          return (
            <Item
              key={indexItem}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle || ""}
              description={item.description || ""}
            />
          );
        })}
        </div>

        <div className="design__process-description">{content.descriptionBottom}</div>
      </div>
    </div>
  );
};
