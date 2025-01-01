import IconArrow from '../../components/Footer/IconArrow';
import redirectionImage from '../../img/redirection-split.png';

import './redirection-section.css';

export const RedirectionSection = () => {
    return (
        <div className="redirection__container">
            <div className="redirection__content">
                <img
                    src={redirectionImage}
                    alt="Redirection section illustration"
                    loading="lazy"
                    className="redirection__image"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'fallback-image-path.png';
                    }}
                />
                <div className='cta__prototype-container'>
                    <h3 className='cta__prototype-paragraph'>¿Listo para explorar el prototipo? ¡Yo también estoy emocionado!</h3>
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
            </div>
        </div>
    );
};