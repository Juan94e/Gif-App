import { createTheme } from '@material-ui/core/styles';
import { green, red,purple, blue } from '@mui/material/colors';

export const lightTheme = createTheme ({
    palette: {
        type:"light",
        secondary: blue,
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