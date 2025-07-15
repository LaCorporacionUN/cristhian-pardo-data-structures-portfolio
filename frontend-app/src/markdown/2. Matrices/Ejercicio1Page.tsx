import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Box, Button, Input, VStack } from '@chakra-ui/react'
// Import del contenido MDX real
import content from './ejercicio1.mdx?raw'

export default function Ejercicio1Page() {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('Ejercicio1Page – montado, longitud de markdown:', content.length)
  }, [])

  return (
    <VStack align="start" p={8} spacing={4}>
      {/* Botón para volver al inicio */}
      <Button
        as="a"
        href="/"
        colorScheme="blue"
        onClick={() => console.log('Ejercicio1Page – volver al inicio')}
      >
        ← Volver al inicio
      </Button>

      {/* Render del Markdown */}
      <Box w="full" bg="gray.700" p={4} rounded="md">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>

      {/* Inputs y botones adicionales */}
      <Input
        placeholder="Entrada Matrices 1"
        value={value}
        onChange={(e) => {
          console.log('Ejercicio1Page – input cambio:', e.target.value)
          setValue(e.target.value)
        }}
      />
      <Button
        colorScheme="teal"
        onClick={() => {
          console.log('Ejercicio1Page – botón clic con valor:', value)
          alert(`Has escrito: ${value}`)
        }}
      >
        Mostrar valor
      </Button>
    </VStack>
  )
}
