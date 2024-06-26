import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: props => ({
      html:{
        scrollBehavior: 'smooth',
      },
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
      },
    }),
    
  },
  fonts: {
      heading: '"Be Vietnam Pro", sans-serif',
      body: '"Be Vietnam Pro", sans-serif',
    },
});

export default theme;
