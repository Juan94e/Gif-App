import React from 'react'
import '../styles/NavBar.css';
import { CategoryAdd } from './CategoryAdd';
import { Switch } from '@material-ui/core';


export const Navbar = ( { setCategories, darkMode, setDarkMode } ) => {

    const handleSwitch = () => { 
        setDarkMode(!darkMode)
    }

    return (
        <nav   className= { "navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow" }  >
            <div className="container-fluid">

                <a href="#home" className={`navbar-brand ${ darkMode ? "green-color" : null } `} >Find ur Gif</a>
                <Switch color="secondary" checked={darkMode} onChange={ handleSwitch } />
                <CategoryAdd setCategories={ setCategories } />


            </div>
        </nav>
    )
}
