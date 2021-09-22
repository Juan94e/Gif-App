import React from 'react'
import '../styles/NavBar.css';
import { CategoryAdd } from './CategoryAdd';


export const Navbar = ( { setCategories } ) => {

    return (
        <nav   className= { `navbar fixed navbar-expand-lg navbar-dark bg-dark shadow` }  >
            <div className="container">

                <a href="#home" className="navbar-brand" >GifExpertApp</a>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-target="#navbarNav"
                    data-bs-toggle="collapse"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <CategoryAdd setCategories={ setCategories } />

                </div>
            </div>
        </nav>
    )
}
