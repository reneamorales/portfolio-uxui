import React from 'react'
import { useEffect, useState } from 'react'
import IconArrow from '../../../components/Footer/IconArrow';

const PopUp = ({ targetRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!targetRef.current) return; // Asegurarse de que la referencia existe

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting); // Actualizar el estado según visibilidad
                });
            },
            { threshold: 0.7 } // Se activa cuando el 70% de la sección es visible
        );

        observer.observe(targetRef.current);

        return () => {
            observer.disconnect(); // Limpiar el observador al desmontar el componente
        };
    }, [targetRef]);


    return (
        <div className={`cta__prototype-container ${isVisible ? 'active' : ''}`}>

            <div className="cta__prototype-paragraph">
                <p>¿Listo para explorar el prototipo?</p>
                <p>¡Yo también estoy emocionado!</p>
            </div>

            <div className="cta__prototype-button">
                <a
                    className="cta__prototype-link"
                    href="https://www.figma.com/proto/prototype-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    Ir al prototipo
                </a>
                <div className="cta__prototype-arrow">
                    <IconArrow />
                </div>
            </div>
        </div>

    )
}

export default PopUp