// src/markdown/9-AVL/Ejercicio9_2Page.tsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Box, VStack } from '@chakra-ui/react'
import content from './ejercicio2.md?raw'

export default function Ejercicio9_2Page() {
  return (
    <VStack align="start" p={6} spacing={4}>
      <Box w="full" bg="gray.800" p={5} rounded="lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
    </VStack>
  )
}