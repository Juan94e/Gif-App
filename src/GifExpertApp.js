import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
// import './index.css';
import { Switch, Button, Paper } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
// import { GifGrid } from './components/GifGrid';
import { GifRender } from './components/GifRender';
import { Navbar } from './components/NavBar';

let testiando = false;

const cambio = () => {

    testiando = !testiando;
    console.log(testiando)
    
}


export const GifExpertApp = () => {

// ***Start dark mode material UI***
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme ({
        palette: {
            secondary: {
                main: "#FFF",
                light: "#FFF",
                dark: "#FFF"
            }, 
            type: darkMode ? "dark" : "light",
        },
    });

    const handleSwitch = () => { 
        setDarkMode(!darkMode)
    }

// ***End dark mode material UI***
    
    const [categories, setCategories] = useState(['Eric Cartman'])

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{height: "100%"}} elevation={2} square >
                <Navbar setCategories={ setCategories } />
                <Switch color="primary" checked={darkMode} onChange={ handleSwitch } />
                <CategoryAdd setCategories={ setCategories }  theme={ theme } />
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
