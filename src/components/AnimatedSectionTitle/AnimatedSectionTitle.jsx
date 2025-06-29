import React, { useEffect, useRef } from "react";
import "./animated-section-title.css";

export const AnimatedSectionTitle = ({ children, className = "" }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("active", entry.isIntersecting);
      },
      { threshold: [0, 0.5, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h3 ref={ref} className={`animated-section-title ${className}`}>
      {children}
    </h3>
  );
};