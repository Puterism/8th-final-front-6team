import { extendTheme } from '@chakra-ui/core';

const theme = extendTheme({
  colors: {
    // main: '#2699fb',
    main: {
      10: '#F6FBFF',
      40: '#e8f5ff',
      50: '#DDF4FF',
      100: '#B8E2FE',
      200: '#94D0FD',
      300: '#6FBDFD',
      400: '#4BABFC',
      500: '#2699fb',
      600: '#1D8BE8',
      700: '#137DD6',
      800: '#0A6EC3',
      900: '#0060B0',
    },
    sub: '#9ad2ff',
    bg: '#f1f9ff',
    gray: '#5a5959',
    bgLight: '#f2f8ff',
    checkboxBorder: '#7fc4fd',
    boxBorder: '#bce0fd',
    boxBorderBlue: '#1995ff',
    green: '#36c66f',
    lightGreen: '#e8fbef',
    lightGray: '#dbdbdb',
    mediumGray: '#626262',
    darkGray: '#323232',
    orange: '#ff7b49',
    black: '#222222',
    subGray: '#faf8f8',
  },
  fonts: {
    body: '-apple-system,BlinkMacSystemFont, "Spoqa Han Sans", "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", sans-serif',
    heading: '-apple-system,BlinkMacSystemFont, "Spoqa Han Sans", "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", sans-serif',
  },
  styles: {
    global: {
      'html, body, #root': { height: '100%' },
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  space: {
    11: '2.75rem',
    17: '4.25rem',
    18: '4.5rem',
    19: '4.75rem',
  },
});

export default theme;
