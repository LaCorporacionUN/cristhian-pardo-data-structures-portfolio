import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ThemeToggle } from './components/ThemeToggle'

// 1) Glob eager de todos los wrappers Ejercicio*Page.tsx
const pages = import.meta.glob<{ default: React.ComponentType }>(
  './markdown/**/Ejercicio*Page.tsx',
  { eager: true }
)
console.log('App – Wrappers detectados:', Object.keys(pages))

export default function App() {
  const location = useLocation()
  useEffect(() => {
    console.log('App – location.pathname:', location.pathname)
  }, [location])

  return (
    <Flex h="100vh">
      <Sidebar />

      <Flex direction="column" flex={1}>
        {/* Botones de idioma y tema en la parte superior */}
        <Box p={2} display="flex" justifyContent="flex-end" gap={2}>
          <LanguageSwitcher />
          <ThemeToggle />
        </Box>

        {/* Contenido principal */}
        <Box flex={1} overflowY="auto" p={4}>
          <Routes>
            {/* Home */}
            <Route index element={<HomePage />} />

            {/* Rutas dinámicas por cada wrapper */}
            {Object.entries(pages).map(([filePath, module]) => {
              // filePath = "./markdown/1. Sequential/Ejercicio1Page.tsx"
              const relative = filePath
                .replace('./markdown/', '')
                .replace(/Page\.tsx$/, '')          // → "1. Sequential/Ejercicio1"
              const [sectionRaw, compRaw] = relative.split('/')
              const section = sectionRaw             // RAW with spaces
              const file = compRaw.toLowerCase()     // "ejercicio1"
              const url = `/markdown/${section}/${file}`

              console.log('App – creando ruta:', { url, filePath })
              return (
                <Route
                  key={url}
                  path={url}
                  element={React.createElement(module.default)}
                />
              )
            })}

            {/* Fallback 404 */}
            <Route
              path="*"
              element={
                <Box textAlign="center" p={8}>
                  <Box as="h1" fontSize="2xl" fontWeight="bold">
                    ❌ Página no encontrada
                  </Box>
                  <Box mt={4}>
                    <a href="/" style={{ color: '#3182ce' }}>
                      ← Volver al inicio
                    </a>
                  </Box>
                </Box>
              }
            />
          </Routes>
        </Box>
      </Flex>
    </Flex>
  )
}
