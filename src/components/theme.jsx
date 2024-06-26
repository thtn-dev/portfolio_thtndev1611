import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  ...defaultTheme,
  styles: {
    global: props => ({
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
      },
    }),
  },
  fonts: {
    heading: `"Be Vietnam Pro", ${defaultTheme.fonts.heading} ,sans-serif`,
    body: `"Be Vietnam Pro", ${defaultTheme.fonts.body}, sans-serif`,
  },
  components: {},
});

export default theme;
