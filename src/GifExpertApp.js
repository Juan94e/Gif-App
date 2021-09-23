import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
// import './index.css';
import { Switch, Button, Paper } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
// import { GifGrid } from './components/GifGrid';
import { GifRender } from './components/GifRender';
import { Navbar } from './components/NavBar';
import { Prueba } from './components/Prueba';
import { blue, deepOrange, green, red } from '@mui/material/colors';
import { darkTheme, lightTheme } from './styles/customTheme';

let testiando = false;

const cambio = () => {

    testiando = !testiando;
    console.log(testiando)
    
}



export const GifExpertApp = () => {

// ***Start dark mode material UI***
    const [darkMode, setDarkMode] = useState(false);

    const handleSwitch = () => { 
        setDarkMode(!darkMode)
    }
// ***End dark mode material UI***
    
    const [categories, setCategories] = useState(['Dragon Ball Z'])

    return (
        <ThemeProvider theme= {darkMode ? darkTheme : lightTheme} >
            <Paper id="home" style={{height: "100%"}} elevation={0} square >
                <Navbar setCategories={ setCategories } />
                {/* <Prueba /> */}
                <Switch color="secondary" checked={darkMode} onChange={ handleSwitch } />
                
                <Button 
                    size="large"
                    color="secondary"
                    variant="contained"
                    startIcon={<SearchIcon />}
                    onClick={ () => cambio()}
                >
                    Search
                </Button>
                <GifRender categories={ categories } setCategories={ setCategories } />
                
            </Paper>
        </ThemeProvider>
    )
}
