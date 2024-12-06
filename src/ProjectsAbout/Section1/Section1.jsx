import React from 'react';

export const Section = ({ title, subtitle, description, imageSrc, className = "" }) => {
    return (
      <section className={`section ${className}`}>
        <h2 className="section__title">{title}</h2>
        {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
        <p className="section__description">{description}</p>
        {imageSrc && <img className='section__image' src={imageSrc} alt={`${title} image`}></img>}
      </section>
    );
  };
  