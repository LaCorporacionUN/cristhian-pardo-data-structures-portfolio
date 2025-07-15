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
  const parts = fullPath.split('/')
  const section = parts[parts.length - 2]
  const compName = parts[parts.length - 1].replace(/Page\.tsx$/, '')
  const route = `/markdown/${section}/${compName.toLowerCase()}`

  if (!tree[section]) tree[section] = []
  tree[section].push({ name: compName, path: route })
})

// 3) Ordena cada sección con comparación numérica
Object.values(tree).forEach((arr) =>
  arr.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { numeric: true })
  )
)

export default function Sidebar() {
  const { t } = useTranslation()
  const location = useLocation()
  useEffect(() => {
    console.log('Sidebar – location.pathname:', location.pathname)
  }, [location])

  // 4) Ordena las secciones numéricamente por el prefijo del nombre
  const sortedSections = Object.keys(tree).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  )

  return (
    <Box
      w="250px"
      bg="gray.100"
      _dark={{ bg: 'gray.800' }}
      p={4}
      h="100vh"
      overflowY="auto"
    >
      <Accordion
        allowMultiple
        defaultIndex={[0]}         // Solo el primer panel abierto
      >
        {sortedSections.map((section) => {
          const entries = tree[section]
          return (
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
                    return (
                      <Button
                        key={path}
                        as={Link}
                        to={path}
                        variant="ghost"
                        w="full"
                      >
                        {label}
                      </Button>
                    )
                  })}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Box>
  )
}
