// src/pages/HomePage.tsx
import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <Box p={8} maxW="4xl" mx="auto">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">
          {t('home.title')}
        </Heading>
        <Text>{t('home.description')}</Text>
        <Text>{t('home.backend')}</Text>
        <Text>{t('home.iaac')}</Text>
        <Text>{t('home.markdown')}</Text>
        <Text>{t('home.execution')}</Text>
      </VStack>
    </Box>
  );
}
