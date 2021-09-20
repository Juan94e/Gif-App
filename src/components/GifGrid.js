import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])


    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=M6hqmV7sKXm49MA7xT5ayne2tndKJFhj'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( (img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        //con la instruccion de abajo manda la constante "gifs" que se encuentra
        //dentro de una const (no es global), entonces no se puede llamar afuera
        //pero con ese "setImages" mandamos la informacion a una funcion global
        setImages( gifs )

    }


    return (
        <div>
            <h3> { category } </h3>
            
            {
                images.map( (img) => {
                    return <GifGridItem
                        key={ img.id }
                        img = { img }
                    />
                })
            }
            
        </div>
    )
}
