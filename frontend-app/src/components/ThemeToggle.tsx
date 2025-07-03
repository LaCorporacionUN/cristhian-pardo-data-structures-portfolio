// src/components/ThemeToggle.tsx
import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log('Modo actual:', colorMode)

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
    />
  )
}
