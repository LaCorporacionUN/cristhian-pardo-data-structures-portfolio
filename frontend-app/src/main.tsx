import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import theme from './theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HashRouter  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
)
