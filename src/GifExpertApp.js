import React, { useState } from 'react'
import './index.css';
import { Switch, Grid, Typography, Button, Paper } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { height } from '@mui/system';

export const GifExpertApp = () => {

    const categories = ['Dragon Ball', 'One Punch', 'Samurai X'];

    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme ({
        palette: {
            type: darkMode ? "dark" : "light",
        },
    });

    const handleSwitch = () => {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{height: "100vh"}} elevation={2} square >
                <Grid container direction="column" >
                <h2>GifExpertApp</h2>
                {/* <hr /> */}
                <ol>
                    {
                        categories.map(category => {
                            return <li key={category}> {category} </li>
                        })
                    }
                </ol>
                    <Switch checked={darkMode} onChange={ handleSwitch } />
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}
