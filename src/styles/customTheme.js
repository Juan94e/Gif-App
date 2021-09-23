import { createTheme } from '@material-ui/core/styles';
import { green, purple } from '@mui/material/colors';

export const lightTheme = createTheme ({
    palette: {
        type:"light",
        secondary: {
            main: '#e3f2fd',
            light: '#FFF',
            dark: '#42a5f5'
        },
    },
});

export const darkTheme = createTheme ({
    palette: {
        type:"dark",
        secondary: green,
        background: {
            default: "#212529",
            paper: "#212529"
          },
    },
});