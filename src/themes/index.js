import { extendTheme } from '@chakra-ui/core';

const theme = extendTheme({
  colors: {
    main: '#2699fb',
    sub: '#9ad2ff',
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
  // breakpoints: {
  //   sm: '30em',
  //   md: '48em',
  //   lg: '62em',
  //   xl: '80em',
  // },
  breakpoints: ['30em', '48em', '62em', '80em'],
});

export default theme;
