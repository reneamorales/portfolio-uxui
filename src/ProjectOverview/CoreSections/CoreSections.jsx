import React, { useState, useRef, useEffect } from "react";
import "./core-sections.css";
import gsap from 'gsap';
import SitemapSection  from "./SiteMapSection";
import NormalImage from "./NormalImage";

export const CoreSections = ({
  className,
  title,
  subtitle,
  description,
  isSitemap,
  imageSrc
}) => {

  useEffect(() => {
    const sections = document.querySelectorAll(".section__content");
    if (!sections.length) return; // Guard clause

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    // Initialize sections with opacity 0
    gsap.set(sections, { opacity: 0 });

    const animateSection = (element, observer) => {
      if (!element || element.classList.contains("animated")) return;

      element.classList.add("animated"); // Marcar la sección como animada

      // Animate section content
      gsap.to(element, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });

      // Animate text
      const titleElement = element.querySelector(".section__title");
      if (titleElement) {
        const words = titleElement.textContent.split(" ");
        titleElement.innerHTML = '';

        words.forEach(word => {
          if (!word.trim()) return;
          const span = document.createElement("span");
          span.textContent = word + " ";
          span.style.display = "inline-block";
          titleElement.appendChild(span);
        });

        gsap.from(titleElement.querySelectorAll("span"), {
          duration: 1,
          opacity: 0,
          scale: 0.5,
          y: 50,
          rotateX: 180,
          stagger: 0.2,
          ease: "expo.out",
        });
      }

      const paragraphs = element.querySelectorAll(".section__description");
      if (paragraphs.length) {
        gsap.fromTo(paragraphs, 
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            duration: 1.2,
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            delay: 0.5,
            overwrite: "auto"
          }
        );
      }

      observer.unobserve(element); // Dejar de observar esta sección
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSection(entry.target, observer);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
}, []);




  return (
    <section className={`section ${className || ""}`}>
      <div className="section__content">
        <div className="section__text-content">
          {title && <h2 className="section__title">{title}</h2>}
          {subtitle && (
            <h3 className="design__process-title section__subtitle">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="section__description">{description}</p>
          )}
        </div>
  
       {/* Renderiza según el tipo de imagen */}
       {isSitemap ? (
  <SitemapSection imageSrc={imageSrc} title={title} />
) : 
  imageSrc && <NormalImage imageSrc={imageSrc} title={title} />
}

      </div>
    </section>
  );
}

export default CoreSections;
