# Apellidos-V3

Una aplicación React + Vite para explorar y buscar apellidos hispanos, diseñada para desplegarse en GitHub Pages.

## Características

- 🔍 Busca apellidos en tiempo real
- 🔤 Navega por letras (A-Z)
- 📱 Completamente responsivo (mobile, tablet, desktop)
- 📄 Visualiza o descarga PDFs
- 🎨 Diseño moderno con Tailwind CSS
- ⚡ Construido con Vite (ultra rápido)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5173/Apellidos-V3/`

## Build

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## Deploy a GitHub Pages

### Paso 1: Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. Crea un repositorio llamado `Apellidos-V3`
3. **NO** inicialices con README, .gitignore, o licencia

### Paso 2: Inicializar Git localmente

```bash
cd /home/vichuge/proyectos/Apellidos-V3
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/vichuge/Apellidos-V3.git
git push -u origin main
```

### Paso 3: Deploy automático

```bash
npm run deploy
```

Este comando:
1. Construye la aplicación (`npm run build`)
2. Crea una rama `gh-pages`
3. Sube los archivos estáticos a GitHub Pages

### Paso 4: Configurar GitHub Pages

1. Ve a Settings → Pages de tu repositorio
2. Bajo "Source", selecciona "Deploy from a branch"
3. Elige la rama `gh-pages` y carpeta `/ (root)`
4. Guarda los cambios

Tu aplicación estará disponible en: **https://vichuge.github.io/Apellidos-V3/**

## Estructura del proyecto

```
Apellidos-V3/
├── public/
│   └── apellidos/          # PDFs organizados por letra
├── src/
│   ├── components/         # Componentes React
│   ├── lib/               # Utilidades
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── vite.config.js         # Configuración de Vite
├── tailwind.config.js     # Configuración de Tailwind
├── generate-manifest.js   # Script para generar manifesto de PDFs
└── package.json
```

## Notas

- Los PDFs se sirven desde la carpeta `public/apellidos/`
- El manifesto JSON se genera automáticamente antes de cada build
- Solo se incluyen archivos que terminan en `-clean.pdf`
- Los archivos de macOS (._*) se ignoran automáticamente

## Autor

Vichuge
