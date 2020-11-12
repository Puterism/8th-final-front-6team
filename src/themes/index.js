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
  breakpoints: ['30em', '48em', '62em', '80em'],
  space: {
    17: '4.25rem',
    18: '4.5rem',
    19: '4.75rem',
  },
});

export default theme;
