import React from 'react'
import IconArrowUpRight from './IconArrowUpRight'
import './cta.css'

const Cta = (closeMenu) => {
    return (
        <div className="cta">
            <a href="#contact" className="cta__button" onClick={closeMenu}>
                <span className="cta__text">Contactar</span>
                <IconArrowUpRight className="cta__icon" />
            </a>
        </div>
    )
}

export default Cta