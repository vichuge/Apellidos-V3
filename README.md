# Apellidos-V3

Una aplicación React + Vite para explorar y buscar apellidos hispanos, diseñada para desplegarse en GitHub Pages.

🌐 **[Ver Proyecto en Vivo](https://vichuge.github.io/Apellidos-V3/)**

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

### Configuración Inicial

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 2. Conectar con repositorio remoto
git remote add origin https://github.com/vichuge/Apellidos-V3.git
git push -u origin main

# 3. Configurar GitHub Actions (opcional) o 4. Deploy inicial
npm run deploy
```

### Actualizar GitHub Pages

Para actualizar el proyecto en producción después de hacer cambios:

```bash
# 1. Asegúrate de que tus cambios estén en main
git add .
git commit -m "Descripción de tus cambios"
git push origin main

# 2. Deploya a GitHub Pages
npm run deploy
```

**¡Listo!** Tu proyecto se actualizará en: https://vichuge.github.io/Apellidos-V3/

El comando `npm run deploy`:
- Ejecuta `generate-manifest.js` para actualizar los PDFs
- Compila la aplicación con `vite build`
- Crea/actualiza la rama `gh-pages`
- Publica los archivos en GitHub Pages

**Nota:** GitHub Pages puede tardar 1-2 minutos en actualizar después del deploy.

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
