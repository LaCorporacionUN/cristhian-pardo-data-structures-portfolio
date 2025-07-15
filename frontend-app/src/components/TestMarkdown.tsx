import React from 'react'
import ReactMarkdown from 'react-markdown'
// Traemos el MD como texto raw usando ?raw
import content from '../markdown/test.md?raw'

export default function TestMarkdown() {
  return (
    <div style={{ padding: 16 }}>
      <h2>📝 Prueba de Markdown Importado</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
