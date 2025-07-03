import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: '🎉 Welcome to the Data Structures Portfolio!',
        description:
          'This project is a portfolio of data structures exercises, deployed on GitHub Pages, using AWS Lambda (Java), API Gateway, and infrastructure as code with GitHub Actions. Markdown rendering is supported and exercises run backend logic in Java.'
      }
    },
    es: {
      translation: {
        welcome: '🎉 ¡Bienvenido al portafolio de estructuras de datos!',
        description:
          'Este proyecto es un portafolio de ejercicios de estructuras de datos, desplegado en GitHub Pages, usando AWS Lambda (Java), API Gateway e infraestructura como código con GitHub Actions. Soporta renderizado de Markdown y los ejercicios ejecutan lógica de backend en Java.'
      }
    }
  },
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
