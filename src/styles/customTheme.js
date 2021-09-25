import { createTheme } from '@material-ui/core/styles';
import { green, red,purple, blue } from '@mui/material/colors';

export const lightTheme = createTheme ({
    palette: {
        type:"light",
        primary: green,
        secondary: blue,

    },
});

export const darkTheme = createTheme ({
    palette: {
        type:"dark",
        primary: green,
        secondary: green,
        background: {
            default: "#212529",
            paper: "#212529"
          },
        text: {
            main: '"FFF',
            primary: '#00e676',
            secondary: '#00e676',
        },
    },
});