import { createTheme } from '@mui/material';

const themes = {
  'liah': createTheme({
    palette: {
      primary: {
        main: '#25B2E7',
        contrastText: '#FFF'
      },
      secondary: {
        main: '#023047',
        contrastText: '#FFF'
      },
      background: {
        default: '#FFF',
        paper: '#F0F1F0'
      },
      text: {
        primary: '#25B2E7',
        secondary: '#3C3C3C',
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      }
    }
  })
};

export default themes;
