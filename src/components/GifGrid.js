import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGIfs';
import { GifGridItem } from './GifGridItem';
import Typography from '@mui/material/Typography';
import '../styles/GifGrid.css';

// en este componenete estamos ocnstruyendo la paginacion con el filtrado de los gifs que llegan

export const GifGrid = ( { category, darkMode } ) => {

    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages( imgs ) )
    }, [ category ])

    // const filtrado =  images.slice(0, 2);

    const filtrado = () => {
        return  images.slice(currentPage, currentPage + 9)
    }

    const previousPage  = () => {
        if ( currentPage > 0 )
            setCurrentPage( currentPage - 9 )
    }

    const nextPage  = () => {
        setCurrentPage( currentPage + 9 )
    }
    

    return (
        <div >
            <button
                className={ `shadow-sm btn mt-3 bf ${ darkMode ? "af" : null} } `} 
                onClick={ previousPage }
            > 
                Previous
            </button>

            <button
                className={ `shadow-sm btn mt-3 ms-3 bf ${ darkMode ? "af" : null} } `} 
                onClick={ nextPage }
            >
                Next
            </button>

            <Typography id="category-capitalize" variant="h3"> { category } </Typography>
            <div className="card-grid" >

                {
                    filtrado().map( (img) => {
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
