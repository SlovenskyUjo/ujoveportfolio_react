import React from 'react'

interface ShinyEffectProps {
    left?: number;
    right?: number;
    top: number;
    size?: number;
}

const ShinyEffect = ({left, right, top, size = 500}: ShinyEffectProps) => {

    const positionStyles = {
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zIndex: -1,

        left: left !== undefined ? `${left}px` : undefined,
        right: right !== undefined ? `${right}px` : undefined,

    }


    return (
        <div className='shiny-effect' style={positionStyles}></div>
    )
}

export default ShinyEffect
