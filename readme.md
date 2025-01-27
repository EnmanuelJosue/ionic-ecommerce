# Aplicación Angular 17 + Ionic 7

## Descripción

Esta aplicación es un proyecto desarrollado con **Angular 19** y **Ionic 8**

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
  npm start o ionic serve
  ```

---

## Herramientas y Tecnologías

- **Angular 19**
- **Ionic 8**


