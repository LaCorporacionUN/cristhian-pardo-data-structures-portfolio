import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import theme from './theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
