# client-admin-sekurity

## 🚀 Características Principales

- **Autenticación Segura**: Implementa autenticación robusta con JWT (JSON Web Tokens) y gestión de sesiones.
- **Panel de Administración**: Interfaz completa para la gestión de usuarios, roles y permisos.
- **Control de Acceso Basado en Roles (RBAC)**: Define roles personalizados con permisos granulares.
- **Diseño Moderno**: Interfaz de usuario limpia y profesional con Tailwind CSS.
- **Arquitectura Modular**: Código organizado en componentes reutilizables y servicios bien definidos.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, Vite
- **Estilos**: Tailwind CSS
- **Autenticación**: JWT, Axios
- **Gestión de Estado**: React Context API
- **UI Components**: Shadcn UI

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd client-admin-sekurity
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🏃 Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`.

## 📂 Estructura del Proyecto

```
client-admin-sekurity/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── contexts/         # Contextos de React (auth, etc.)
│   ├── layouts/          # Layouts de la aplicación
│   ├── pages/            # Páginas de la aplicación
│   ├── services/         # Servicios (API calls, etc.)
│   ├── utils/            # Utilidades
│   └── App.jsx           # Componente principal
├── public/               # Archivos estáticos
├── tailwind.config.js    # Configuración de Tailwind
└── vite.config.js        # Configuración de Vite
```

## 🔐 Autenticación

El sistema utiliza autenticación basada en JWT. Los endpoints de autenticación son:

- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/logout` - Cerrar sesión

## 👥 Roles y Permisos

El sistema soporta diferentes roles con permisos específicos:

- **Admin**: Acceso total
- **Editor**: Puede editar contenido
- **Viewer**: Solo lectura

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, crea un pull request con tus cambios.

## 👨‍💻 Autor

- **KennethMC26**

## 📄 License

MIT License

Copyright (c) 2026 KennethMC26

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.