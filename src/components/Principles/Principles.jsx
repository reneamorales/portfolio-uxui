import { React, useEffect, useRef } from "react";
import "./Principles.css";

export const Principles = () => {
  const capsulesRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-peel");
          observer.unobserve(entry.target); // Solo anima una vez
        }
      });
    }, options);

    capsulesRef.current.forEach((capsule) => {
      if (capsule) observer.observe(capsule);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="principles" className="principles-section">
      <div className="principles-container">
        <h2 className="section-title">Principios que guían mis trabajos</h2>
        <div className="capsules-container">
          {[
            "Usability",
            "Accessibility",
            "User Research",
            "User-Centered Design",
            "Scalability",
            "Atómic Design",
            "Interactivity",
            "Information Architecture",
            "Design thinking",
            "Inclusive design",
            "Golden ratio",
            "Microinteractions",
            "Visual and functional consistency",
            "Performance",
          ].map((text, index) => (
            <div
              key={index}
              className="capsule"
              ref={(el) => (capsulesRef.current[index] = el)}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
