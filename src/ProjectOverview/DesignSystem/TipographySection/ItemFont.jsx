import React from 'react'


export const ItemFont = ({ type, name, abc, numbers }) => {
    return (
        <div className='item__font'>
            <span className='item__font-font-type'>{type.toUpperCase()}</span>
            <p className='item__font-font-name'>{name}</p>
            <div className="item__font-references">
            <p className='item__font-detail item__font-abc-upper'>{abc.toUpperCase()}</p>
            <p className='item__font-detail item__font-abc-lower'>{abc}</p>
            <p className=' -item__font-detail item__font-numbers'>{numbers}</p>
            </div>
        </div>
    )
}

