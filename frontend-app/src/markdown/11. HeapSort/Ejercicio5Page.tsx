// src/markdown/11-HeapSort/Ejercicio11_5Page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, VStack } from '@chakra-ui/react';
import content from './ejercicio11_5.md?raw';

export default function Ejercicio11_5Page() {
  return (
    <VStack align="start" p={6} spacing={4}>
      <Box w="full" bg="gray.800" p={5} rounded="lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
    </VStack>
  );
}