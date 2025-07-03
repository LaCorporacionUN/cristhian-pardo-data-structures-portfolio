// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import './i18n'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Esto lee y aplica el color-mode guardado en localStorage */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
