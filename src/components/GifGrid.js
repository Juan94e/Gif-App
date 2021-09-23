import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGIfs';
import { GifGridItem } from './GifGridItem';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from '../styles/customTheme';
import { Paper } from '@material-ui/core';

export const GifGrid = ( {category} ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages( imgs ) )
    }, [ category ])

    return (
        <div >
            <Typography id="category-capitalize" variant="h2"> { category } </Typography>
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
