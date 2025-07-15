import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Box, Button, Input, VStack } from '@chakra-ui/react'
import content from './ejercicio3.md?raw'

export default function Ejercicio1Page() {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('Ejercicio3Page – montado, longitud de markdown:', content.length)
  }, [])

  return (
    <VStack align="start" p={8} spacing={4}>
      {/* Botón de regreso */}
      <Button as="a" href="/" colorScheme="blue" onClick={() => console.log('Ejercicio1Page – volver')}>
        ← Volver al inicio
      </Button>

      {/* Render del Markdown */}
      <Box w="full" bg="gray.700" p={4} rounded="md">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>

      {/* Inputs y botones adicionales */}
      <Input
        placeholder="Escribe algo..."
        value={value}
        onChange={(e) => {
          console.log('Ejercicio1Page – input cambio:', e.target.value)
          setValue(e.target.value)
        }}
      />
      <Button
        colorScheme="teal"
        onClick={() => {
          console.log('Ejercicio1Page – botón mostrar valor:', value)
          alert(`Has escrito: ${value}`)
        }}
      >
        Mostrar valor
      </Button>
    </VStack>
  )
}
