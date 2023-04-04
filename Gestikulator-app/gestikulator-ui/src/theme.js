import {createTheme} from '@mui/material/styles';

const palette = {
  primary: {
    main: '#4CAF50',
  },
  secondary: {
    main: '#2196F3',
    lighterVariant1: ' #DDEBFA',
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
    secondary: '#757575',
    disabled: '#9E9E9E',
    hint: '#BDBDBD',
  },
};

const typography = {
  fontFamily: [
    'Open Sans',
    'sans-serif',
  ].join(','),
  h4: {
    fontWeight: "bold",
    fontSize: 24,
    color: palette.text.primary,
    lineHeight: "1.2",
    fontFamily: "inherit",
  },
};

const theme = createTheme({
  palette,
  typography,
});

export default theme;
