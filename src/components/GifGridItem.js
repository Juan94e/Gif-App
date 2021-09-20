import React from 'react'

export const GifGridItem = ( {img} ) => {

    console.log(img)

    return (
        <div className="card">
            <p> { img.title } </p>
            <img src={ img.url } alt={ img.title } />
        </div>
    )
}
