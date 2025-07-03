import React from 'react'
import { Box, Text, HStack, Flex } from '@chakra-ui/react'
import { ThemeToggle } from './components/ThemeToggle'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar'
import MarkdownPage from './pages/MarkdownPage'

export default function App() {
  const { t } = useTranslation()

  return (
    <Flex height="100vh">
      <Sidebar />

      <Box flex="1" p={8}>
        <Flex justify="flex-end" mb={4}>
          <HStack spacing={4}>
            <LanguageSwitcher />
            <ThemeToggle />
          </HStack>
        </Flex>

        <Text fontSize="3xl" fontWeight="bold">
          {t('welcome')}
        </Text>
        <Text mt={4}>{t('description')}</Text>
      </Box>
    </Flex>
  )
}
