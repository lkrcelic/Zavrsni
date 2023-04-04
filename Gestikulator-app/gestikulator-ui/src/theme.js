import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#2196F3',
      lighterVariant1:' #DDEBFA',
      lighterVariant2: '#CCE4FA',
      lighterVariant3: '#BBDDFA',
    },
    warning: {
      main: '#FF5722',
    },
    info: {
      main: '#FFC107',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#212121',
    },
  },
  typography: {
    h1: {
      marginLeft: 30,
    },
    levelText: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 25,
      lineHeight: "29px",
      color: "#121212",
      fontFamily: "inherit",
      opacity: 1,
    },
  },
});

export default theme;
