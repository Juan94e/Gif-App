import React, { useState } from 'react'
import { Switch, Button, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import { GifRender } from './components/GifRender';
import { Navbar } from './components/NavBar';
// import { Prueba } from './components/Prueba';
import { darkTheme, lightTheme } from './styles/customTheme';

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
            <Paper id="home" style={{height: "100%", width: "100%" }} elevation={0} square >
                <Navbar setCategories={ setCategories } setDarkMode={ setDarkMode } darkMode={ darkMode } />
                {/* <Prueba /> */}
                <GifRender categories={ categories } setCategories={ setCategories } />
                
            </Paper>
        </ThemeProvider>
    )
}
