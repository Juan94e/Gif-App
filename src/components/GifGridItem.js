import React from 'react'
//Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { darkTheme } from '../styles/customTheme';
import { blue } from '@mui/material/colors';



export const GifGridItem = ( { img, darkMode } ) => {

    // console.log(img)

    return (
        // <div className="card">
        //     <p> { img.title } </p>
        //     <img src={ img.url } alt={ img.title } />
        // </div>
        <ThemeProvider theme={ darkTheme } >
            <div id="card-container">
                <Card
                    sx={{
                        maxWidth: 345,
                        height: 380,
                        boxShadow: 3,
                        borderRadius: 2,
                        bgcolor: darkMode ? "#212529" : null,
                    }}>
                    <CardMedia
                        component="img"
                        height="280"
                        image={ img.url }
                        alt={ img.title }
                    />
                    <CardContent className={`${ darkMode ? "contenidoc" : null } `} >
                        <Typography gutterBottom variant="h6" component="div">
                            { img.title } 
                        </Typography>
                    </CardContent>        
                </Card>
            </div>
        </ThemeProvider>
    )
}
