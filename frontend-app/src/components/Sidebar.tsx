import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

// 1) Glob eager de todos los wrappers Ejercicio*Page.tsx
const modules = import.meta.glob<{ default: React.ComponentType }>(
  '../markdown/**/Ejercicio*Page.tsx',
  { eager: true }
)
console.log('Sidebar – Wrappers detectados:', Object.keys(modules))

type Entry = { name: string; path: string }
const tree: Record<string, Entry[]> = {}

// 2) Construye árbol sección → ejercicios
Object.keys(modules).forEach((fullPath) => {
  // fullPath = "../markdown/1. Sequential/Ejercicio1Page.tsx"
  const parts = fullPath.split('/')
  const section = parts[parts.length - 2]                           // "1. Sequential"
  const compName = parts[parts.length - 1].replace(/Page\.tsx$/, '') // "Ejercicio1"
  // Ruta RAW (con espacios)
  const route = `/markdown/${section}/${compName.toLowerCase()}`

  if (!tree[section]) tree[section] = []
  tree[section].push({ name: compName, path: route })
})
console.log('Sidebar – Árbol antes de sort:', tree)

// 3) Ordena cada sección
Object.values(tree).forEach((arr) =>
  arr.sort((a, b) => {
    const na = Number(a.name.match(/\d+$/)?.[0] ?? 0)
    const nb = Number(b.name.match(/\d+$/)?.[0] ?? 0)
    return na && nb ? na - nb : a.name.localeCompare(b.name)
  })
)
console.log('Sidebar – Árbol ordenado:', tree)

export default function Sidebar() {
  const { t } = useTranslation()
  const location = useLocation()
  useEffect(() => {
    console.log('Sidebar – location.pathname:', location.pathname)
  }, [location])

  return (
    <Box
      w="250px"
      bg="gray.100"
      _dark={{ bg: 'gray.800' }}
      p={4}
      h="100vh"
      overflowY="auto"
    >
      <Accordion allowMultiple defaultIndex={Object.keys(tree).map((_, i) => i)}>
        {Object.entries(tree).map(([section, entries]) => (
          <AccordionItem key={section}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {section}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack align="stretch">
                {entries.map(({ name, path }) => {
                  const num = name.match(/\d+$/)?.[0]
                  const label = num ? `${t('exercise')} ${num}` : name
                  console.log('Sidebar – render button:', { label, path })
                  return (
                    <Button
                      key={path}
                      as={Link}
                      to={path}
                      variant="ghost"
                      w="full"
                      onClick={() => console.log('Sidebar – click:', path)}
                    >
                      {label}
                    </Button>
                  )
                })}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}
