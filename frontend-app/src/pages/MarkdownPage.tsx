// src/pages/MarkdownPage.tsx
import { useEffect, useState } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

export default function MarkdownPage() {
  const { docId } = useParams()
  const [content, setContent] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/markdown/${docId}.md`)
      .then(res => res.text())
      .then(setContent)
      .catch(() => setContent('❌ Error cargando el archivo.'))
  }, [docId])

  if (!content) {
    return <Spinner size="xl" />
  }

  return (
    <Box p={8}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  )
}
