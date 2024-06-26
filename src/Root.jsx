import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './components/theme';

const container = document.getElementById('root');
const root = createRoot(container);

export function render(App) {
  root.render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </StrictMode>
  );
}
