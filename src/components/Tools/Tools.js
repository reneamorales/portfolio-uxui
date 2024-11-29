import React from 'react';
import './Tools.css';
import ejemploImage from '../../img/logo-figma.png';
import ejemploImage1 from '../../img/brands/logo-notion.png';
import ejemploImage2 from '../../img/brands/logo-figjam.png';
import ejemploImage3 from '../../img//brands/spline-logo.jpeg';
import ejemploImage4 from '../../img/logo-figma.png';

export const Tools = () => {
    return (
        <section id="main-tools">
        <div className="main-tools-container">
          <h3 className="title-section">Herramientas principales</h3>
          <div className="tools-container">
            <div className="tools">
              <img
                src={ejemploImage}
                alt="Logo de Figma"
                className="tool-logo"
              />
              <div className="tool-text">
                <p className="tool-name">FigJam</p>
                <p className="tool-category">Ideation</p>
              </div>
            </div>
            <div className="tools">
              <img
                src={ejemploImage1}
                alt="Logo de Adobe XD"
                className="tool-logo"
              />
              <div className="tool-text">
                <p className="tool-name">FigJam</p>
                <p className="tool-category">Ideation</p>
              </div>
            </div>
            <div className="tools">
              <img
                src={ejemploImage2}
                alt="Logo de Photoshop"
                className="tool-logo"
              />
              <div className="tool-text">
                <p className="tool-name">FigJam</p>
                <p className="tool-category">Ideation</p>
              </div>
            </div>
            <div className="tools">
              <img
                src={ejemploImage3}
                alt="Logo de Notion"
                className="tool-logo"
              />
              <div className="tool-text">
                <p className="tool-name">Spline</p>
                <p className="tool-category">3D Modeling</p>
              </div>
            </div>
            <div className="tools">
              <img
                src={ejemploImage4}
                alt="Logo de Visual Studio Code"
                className="tool-logo"
              />
              <div className="tool-text">
                <p className="tool-name">FigJam</p>
                <p className="tool-category">Ideation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
                )
}