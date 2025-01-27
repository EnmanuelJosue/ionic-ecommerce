# Aplicación Angular 17 + Ionic 7

## Descripción

Esta aplicación es un proyecto desarrollado con **Angular 17** y **Ionic 7**

---

## Características principales

- **Ionic Components**: Integración con componentes visuales de Ionic para una experiencia nativa.
- **PWA Ready**: Configuración lista para habilitar la Progressive Web App.

---

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes elementos:

- **Node.js** (versión 20.9.0 o superior): [Descargar Node.js](https://nodejs.org/)
- **Angular CLI** (versión 19 o superior):
  ```bash
  npm install -g @angular/cli
  ```
- **Ionic CLI** (versión 8):
  ```bash
  npm install -g @ionic/cli
  ```
- **Git** (opcional, para clonar el repositorio): [Descargar Git](https://git-scm.com/)

---

## Instalación

Sigue los pasos a continuación para configurar y ejecutar la aplicación localmente:

1. **Clona el repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Configura el entorno**:

   - Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias.
   - Ejemplo de configuración:
     ```env
     API_URL=https://fakestoreapi.com
     ```

4. **Ejecuta la aplicación en desarrollo**:

   ```bash
   ionic serve
   ```

   Accede a la aplicación en tu navegador en: `http://localhost:8100`


## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
|-- src
    |-- app
        |-- core              // Servicios y configuraciones centrales
        |-- shared            // Componentes y utilidades reutilizables
        |-- features          // Módulos específicos de características
        |-- environments      // Configuración de entornos
    |-- assets                // Imágenes, íconos y recursos estáticos
    |-- theme                 // Estilos globales y variables SCSS
```

---

## Scripts disponibles

- **Desarrollo**:

  ```bash
  npm start
  ```

  Inicia el servidor de desarrollo.

- **Construcción para producción**:

  ```bash
  npm run build
  ```

  Genera los archivos optimizados para producción.

- **Linting**:

  ```bash
  npm run lint
  ```

  Analiza el código para encontrar errores o problemas de estilo.

- **Pruebas**:

  - Unitarias:
    ```bash
    npm run test
    ```
  - E2E:
    ```bash
    npm run e2e
    ```

---

## Herramientas y Tecnologías

- **Angular 17**: Framework para la construcción de aplicaciones SPA.
- **Ionic 7**: Biblioteca de componentes y herramientas para crear aplicaciones móviles.
- **Capacitor**: Herramienta para la ejecución en dispositivos móviles.
- **SCSS**: Preprocesador CSS para la gestión de estilos.
- **Jasmine/Karma**: Framework para pruebas unitarias.
- **Protractor/Cypress**: Herramientas para pruebas end-to-end (E2E).

---

## Contribución

Si deseas contribuir a este proyecto:

1. Realiza un fork del repositorio.
2. Crea una rama nueva para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios necesarios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía un pull request a la rama principal del repositorio.

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto:

- **Autor**: [Tu Nombre]
- **Email**: [tuemail@correo.com](mailto\:tuemail@correo.com)
- **LinkedIn**: [Tu Perfil de LinkedIn](https://linkedin.com/in/tuperfil)

---

¡Gracias por usar esta aplicación! ✨

