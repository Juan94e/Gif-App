import React from 'react'
import { GifGrid } from './GifGrid'
import '../styles/GifRender.css'

//por que hice este componente? 
//para poder dejar el 'GifExpertApp.js' un poco menos saturado.
// Ya que no pude separar el 'theme' en otro archivo.
//asi que este le mande como props categories y las leo desde aqui

export const GifRender = ( { categories } ) => {
    return (
        <div className="gifRender-container">
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                        category={ category }
                        key={category} 
                        />
                    })
                }
            </ol>
        </div>
    )
}
