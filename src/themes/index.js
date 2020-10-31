import { extendTheme } from '@chakra-ui/core';

const theme = extendTheme({
  colors: {
    main: '#2699fb',
    sub: '#9ad2ff',
  },
  styles: {
    global: {
      'html, body, #root': { height: '100%' },
    },
  },
});

export default theme;
