import { Box, VStack, Button } from '@chakra-ui/react'

export default function Sidebar() {
  return (
    <Box
      w="200px"
      bg="gray.100"
      _dark={{ bg: 'gray.800' }}
      p={4}
      h="100%"
    >
      <VStack spacing={4} align="stretch">
        <Button w="full" isDisabled>Inicio</Button>
        <Button w="full" isDisabled>Ejercicio 1</Button>
        <Button w="full" isDisabled>Ejercicio 2</Button>
      </VStack>
    </Box>
  )
}
