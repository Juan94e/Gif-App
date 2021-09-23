import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGIfs';
import { GifGridItem } from './GifGridItem';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../styles/customTheme';

export const GifGrid = ( {category} ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages( imgs ) )
    }, [ category ])

    return (
        <ThemeProvider  theme={darkTheme}>
            <Typography variant="h2" color="secondary" > { category } </Typography>
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
        </ThemeProvider>
    )
}
