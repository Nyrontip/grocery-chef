# GroceryChef 🍳

**GroceryChef** es una aplicación web full stack que permite gestionar recetas de cocina y generar automáticamente listas de compras a partir de los ingredientes de múltiples recetas.

Los usuarios pueden registrarse, iniciar sesión y crear recetas con su descripción, pasos de preparación y lista de ingredientes. Además, el sistema permite marcar recetas como favoritas y filtrarlas fácilmente.

Una de las funcionalidades principales es la generación de una **lista de compras unificada**, donde el usuario puede seleccionar varias recetas y el sistema agrupa los ingredientes repetidos, sumando sus cantidades para facilitar la planificación de compras.

El proyecto implementa consultas asincrónicas en el backend utilizando **Promise.allSettled** para obtener ingredientes de varias recetas en paralelo y construir la lista de compras de forma eficiente.

## Tecnologías utilizadas

- **Frontend:** React + Vite + TypeScript
- **Backend:** Node.js + Express + TypeScript
- **Base de datos:** PostgreSQL
- **ORM:** Sequelize
- **Autenticación:** JWT + bcrypt

## Autores

Proyecto desarrollado por:

- **Simon David Cruz Suazo**
- **Javier Leonardo Argoty Roa**

Como parte de un proyecto académico universitario enfocado en el desarrollo de aplicaciones web full stack, diseño de bases de datos y construcción de APIs REST.
