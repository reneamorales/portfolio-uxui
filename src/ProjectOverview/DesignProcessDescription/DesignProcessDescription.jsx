import React from 'react';
import './design-process-description.css';

const DesignProcessDescription = ({ children }) => {
  return (
    <p className="design-process-description--md">
      {children}
    </p>
  );
};

export default DesignProcessDescription;
