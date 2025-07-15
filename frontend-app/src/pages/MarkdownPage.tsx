import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'

// Glob de todos los MDX
const modules = import.meta.glob<{ default: React.ComponentType }>(
  '../markdown/**/*.mdx',
  { eager: true }
)

export default function MarkdownPage() {
  const { section = '', file = '' } = useParams<'section' | 'file'>()
  const decoded = decodeURIComponent(section)

  // Buscamos el MDX correspondiente
  const key = Object.keys(modules).find(k =>
    k.endsWith(`/${decoded}/${file}.mdx`)
  )

  // Botón de regreso
  const back = (
    <Button as={Link} to="/" mb={4} colorScheme="blue">
      ← Volver al inicio
    </Button>
  )

  if (!key) {
    return (
      <Box p={8}>
        {back}
        <Box fontWeight="bold">❌ No se encontró «{decoded}/{file}.mdx»</Box>
      </Box>
    )
  }

  const Component = modules[key].default
  return (
    <Box p={8}>
      {back}
      <Component />
    </Box>
  )
}
