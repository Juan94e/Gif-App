import React from 'react'
//Material UI
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const GifGridItem = ( {img} ) => {

    // console.log(img)

    return (
        // <div className="card">
        //     <p> { img.title } </p>
        //     <img src={ img.url } alt={ img.title } />
        // </div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="180"
                image={ img.url }
                alt={ img.title }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { img.title } 
                </Typography>
            </CardContent>        
        </Card>
    )
}
