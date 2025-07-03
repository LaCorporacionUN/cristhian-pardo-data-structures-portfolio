// src/components/Sidebar.tsx
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

export default function Sidebar() {
  const { t } = useTranslation()

  // Claves base para los títulos
  const sections = [
    'sequential',
    'matrices',
    'linkedLists',
    'listInterface',
    'stacks',
    'queues',
    'dynamicArrays',
    'trees',
    'avlTrees',
    'heaps',
    'disjointSet',
    'hashTables',
    'graphs',
  ]

  return (
    <Box
      w="250px"
      bg="gray.100"
      _dark={{ bg: 'gray.800' }}
      p={4}
      h="100vh"
      overflowY="auto"
    >
      <Accordion allowMultiple defaultIndex={[0]}>
        {sections.map((key, idx) => (
          <AccordionItem key={idx}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">{t(key)}</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack align="stretch">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Button key={n} w="full" isDisabled>
                    {t('exercise')} {n}
                  </Button>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}
