import React, { Suspense, memo } from 'react'
import PropTypes from 'prop-types'
import './alternating-process-grid.css'

const AlternatingProcessGrid = memo(({ content }) => {
    if (!content) return null;

    return (
        <div className='second__grid-container'>
            <p className='design__process-title'>{content?.title}</p>
            <Suspense fallback={<div>Loading...</div>}>
                {content?.item?.map((item, indexItem) => (
                    <div
                        key={`grid-item-${indexItem}`}
                        className={`second__grid-inner ${indexItem % 2 === 1 ? 'reverse' : ''}`}
                    >
                        <img
                            src={item.imageSrc}
                            alt={`Component ${indexItem + 1}`}
                            loading="lazy"
                        />
                        <div className='design__process-description second__grid-descriptions'>
                            {item.description}
                        </div>
                    </div>
                ))}
            </Suspense>

        </div>
    )
})

AlternatingProcessGrid.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        item: PropTypes.arrayOf(
            PropTypes.shape({
                imageSrc: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            })
        )
    })
}

AlternatingProcessGrid.displayName = 'AlternatingProcessGrid'

export default AlternatingProcessGrid