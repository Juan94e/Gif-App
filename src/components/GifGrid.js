import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGIfs';
import { GifGridItem } from './GifGridItem';
import Typography from '@mui/material/Typography';

export const GifGrid = ( { category, darkMode } ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages( imgs ) )
    }, [ category ])

    const filtrado =  images.slice(0, 5);
    

    return (
        <div >
            <Typography id="category-capitalize" variant="h2"> { category } </Typography>
            <div className="card-grid" >

                {
                    filtrado.map( (img) => {
                        return <GifGridItem
                            key={ img.id }
                            img = { img }
                            darkMode = { darkMode }
                        />
                    })
                }

            </div>
        </div>
    )
}
