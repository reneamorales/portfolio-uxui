import React from 'react'
import './TipographySection.css'
import { ItemFont } from './ItemFont'
import { ItemFontContent } from './ItemFontContent'
import { ItemParagraph } from './ItemFontContent';

export const TipographySection = () => {
    return (
        <div
            className='design__process-container'>
            <p className='design__process-title'>{ItemParagraph.title}</p>
            <p className='design__process-description'>{ItemParagraph.description}</p>
            <div className='tipography__section-inner'>
                {ItemFontContent.map((font, index) => (
                    <ItemFont
                        key={index}
                        type={font.type}
                        name={font.name}
                        abc={font.abc}
                        numbers={font.numbers}
                    />
                ))}
            </div>
        </div>
    )
}

