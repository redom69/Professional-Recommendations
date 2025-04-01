# Professional Recommendations 

Este proyecto ha sido desarrollado como parte de una prueba técnica para la posición de Frontend Developer en Nova.

Tiempo total invertido: Aproximadamente 1 hora y 45 minutos
- ~1 hora y 15 minutos dedicados a la configuración del proyecto desde cero (Next.js + TailwindCSS + estructura)
- ~45 minutos en la implementación de tests unitarios para los cuatro componentes clave del sistema

---

## Stack

- **Next.js** 
- **React** 
- **TailwindCSS** 
- **Formik + Yup** para los formularios y validaciones
- **React Context API** para el manejo de variables locales
- **Jest + React Testing Library** para test unitarios
- **PrimeIcons** para arreglos visuales

---

## Setup

### 1. Clonar el repositorio
git clone https://github.com/redom69/Professional-Recommendations.git
cd Professional-Recommendations

### 2. Instalar dependencias
npm install

### 3. Ejecutar el proyecto en local
npm run dev

### 4. Test (opcional)
npm run test

---


## Aclaraciones

En esta sección explico brevemente las decisiones que tomé a la hora de seleccionar el stack y organizar la arquitectura del proyecto:


- El resto de las librerías las seleccioné por afinidad y eficiencia, buscando trabajar con un stack con el que me siento cómodo y ágil.
- Elegí Formik junto a Yup para la gestión y validación de formularios, ya que son herramientas que utilizo en mi día a día y con las que me siento muy comodo. Aunque también podría haberse usado react-hook-form, Formik me permite una integración sencilla y controlada.
- Para el manejo de estado local/global, opté por utilizar React Context API, porque como se explica en el enunciado es una pruba corta y que debería servir para una demo. Consideré que usar Redux habría sido una solución más pesada para el objetivo de esta prueba, y con Context se resolvía perfectamente.
- En el aspecto visual, utilicé PrimeIcons para aportar un toque mas visual con muy poco esfuerzo, que hace que la interfáz sea mas agradable.
- He utilizado ChatGPGT para la redacción del README.md y para consultar alguna duda técnica sobre el test unitario y configuraciones.

---

Este repositorio cuenta con todos los requerimientos básicos y la mayoría de los requerimientos opcionales, salvo la implementación en Typescript, aunque se le podrían hacer ciertas mejoras para tener una versión mas completa:
- Integrar un backend (REST o GraphQL) para almacenar y recuperar las recomendaciones desde una base de datos.
- Añadir un sistema de notificaciones (por ejemplo, con Toast) para mostrar visualmente el estado de las acciones como la creación, edición o eliminación de recomencaciones.
- Añadir indicadores de carga, éxito o error al editar y borrar recomendaciones.
- Implementar un toggle para cambiar entre modo claro y oscuro usando Tailwind (dark:).
- Agregar filtros por autor, fecha o palabra clave, y orden por más recientes o antiguos.
- Extraer la validación de Formik a un archivo independiente (validationSchema.js) para mejorar la organización y mantenimiento del código.