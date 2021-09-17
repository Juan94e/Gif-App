import React, { useState } from 'react'
import './index.css';
import { Switch, Grid, Typography, Button, Paper } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';

export const GifExpertApp = () => {

    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme ({
        palette: { 
            type: darkMode ? "dark" : "light",
        },
    });

    const handleSwitch = () => {
        setDarkMode(!darkMode)
    }

    
    const [categories, setCategories] = useState(['en componentes el dark mode etc', 'mirar lo del shadow y color en el boton para que sea blanco', 'mañana viernes termino'])
    
    // setCategories toma el valor del estado anterior y lo guarda en "categs" y devuelve ese nuevo Array(valor)
    const handleAdd = () => {
        setCategories( (categs) => [...categs, 'otra mas'] )
    }

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{height: "100vh", padding:"15px"}} elevation={2} square >
                
                <h2>GifExpertApp</h2>
                {/* <hr /> */}
                <Button 
                    size="large"
                    color="primary"
                    variant="contained"
                    startIcon={<SearchIcon />}
                    onClick={ handleAdd }
                >
                    Search
                </Button>
                <ol>
                    {
                        categories.map(category => {
                            return <li key={category}> {category} </li>
                        })
                    }
                </ol>
                    <Switch color="primary" checked={darkMode} onChange={ handleSwitch } />
                
            </Paper>
        </ThemeProvider>
    )
}
