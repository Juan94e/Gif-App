import React from 'react'
import '../styles/NavBar.css';
import { CategoryAdd } from './CategoryAdd';


export const Navbar = ( { setCategories } ) => {

    return (
        <nav   className= { "navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow" }  >
            <div className="container-fluid">

                <a href="#home" className="navbar-brand" >GifExpertApp</a>
                <CategoryAdd setCategories={ setCategories } />

            </div>
        </nav>
    )
}
