import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
// import './index.css';
import { Switch, Button, Paper } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
// import { GifGrid } from './components/GifGrid';
import { GifRender } from './components/GifRender';

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
    
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{height: "100%", padding:"15px"}} elevation={2} square >
                <Switch color="primary" checked={darkMode} onChange={ handleSwitch } />
                <h2>GifExpertApp</h2>
                <CategoryAdd setCategories={ setCategories }  theme={ theme } />
                {/* <hr /> */}
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
