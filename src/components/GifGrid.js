import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGIfs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages( imgs ) )
    }, [])
    
    return (
        <div>
            <h3> { category } </h3>
            <div className="card-grid" >

                {
                    images.map( (img) => {
                        return <GifGridItem
                            key={ img.id }
                            img = { img }
                        />
                    })
                }

            </div>
        </div>
    )
}
