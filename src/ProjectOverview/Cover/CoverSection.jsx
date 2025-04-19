import React from 'react';
import './cover-section.css';

export const Cover = () => {
    return (
        <div className="cover">
            <div className="cover__inner">
                <div className="cover__title">
                    <span className="symbol">{'{'}</span>
                    <span className="brand-name">Cranbelo</span>
                    <span className="symbol">{'}'}</span>
                </div>

                <div className="cover__text">Rediseño Dinámico y Funcional del Sitio Web Cranbelo</div>

            </div>
        </div>
    )
}
