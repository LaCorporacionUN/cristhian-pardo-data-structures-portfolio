// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: '🎉 Welcome to the Data Structures Portfolio!',
          description:
            'This project is a portfolio of data structures exercises, deployed on GitHub Pages, using AWS Lambda (Java), API Gateway, and infrastructure as code with GitHub Actions. Markdown rendering is supported and exercises run backend logic in Java.',
          home: {
            title: 'Home',
            description: 'Select an exercise from the sidebar to begin.',
            backend: '🔧 Backend powered by AWS Lambda',
            iaac: '🛠️ IaC with GitHub Actions',
            markdown: '📄 Markdown-based exercises',
            execution: '🚀 Execute code in-browser',
          },
          // …otras claves globales…
        },
      },
      es: {
        translation: {
          welcome: '🎉 ¡Bienvenido al portafolio de estructuras de datos!',
          description:
            'Este proyecto es un portafolio de ejercicios de estructuras de datos, desplegado en GitHub Pages, usando AWS Lambda (Java), API Gateway e infraestructura como código con GitHub Actions. Soporta renderizado de Markdown y los ejercicios ejecutan lógica de backend en Java.',
          home: {
            title: 'Inicio',
            description: 'Selecciona un ejercicio en el menú lateral para empezar.',
            backend: '🔧 Backend con AWS Lambda',
            iaac: '🛠️ IaC con GitHub Actions',
            markdown: '📄 Ejercicios en Markdown',
            execution: '🚀 Ejecuta código en el navegador',
          },
          // …otras claves globales…
        },
      },
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
