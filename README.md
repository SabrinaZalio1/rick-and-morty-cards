# 🚀 Rick and Morty Explorer

A small but modern web application to explore characters and locations from the Rick and Morty universe, built with Next.js and TypeScript.

## Features

- 📊 **Dual Tab Navigation**: Browse between Characters and Locations
- 🎨 **Themed Design**: Rick and Morty-inspired color palette with glowing effects
- ⚡ **Smart Caching**: No unnecessary API refetches when switching tabs
- ♿ **Accessibility First**: WCAG compliant with ARIA labels, keyboard navigation, and semantic HTML
- 📱 **Responsive Grid**: Auto-fill layout adapting to all screen sizes
- 🎯 **Type Safe**: Full TypeScript implementation
- 🔄 **Loading States**: Smooth loading and error handling

## 🛠️ Technologies Used

### Core
- **[Next.js](https://nextjs.org/)** (14.x) - React framework with Pages Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[React](https://react.dev/)** (18.x) - UI library

### Styling
- **[styled-components](https://styled-components.com/)** - CSS-in-JS styling
- Custom theme system with design tokens

### Data Fetching
- **[Axios](https://axios-http.com/)** - HTTP client
- **[@tanstack/react-query](https://tanstack.com/query)** (v5) - Server state management with caching

### API
- **[Rick and Morty API](https://rickandmortyapi.com/)** - Public REST API


## 📦 Project Structure
```
rick-and-morty/
├── src/
│   ├── components/
│   │   ├── CharacterCard.tsx       # Card component with details
│   │   ├── CharactersTab.tsx       # Tab content 
│   │   ├── LocationCard.tsx        # Location Card component
│   │   ├── LocationsTab.tsx        # Locations tab content 
│   │   └── Tabs.tsx                # Tab navigation component
│   ├── hooks/
│   │   ├── useCharacters.ts        # Hook for characters
│   │   └── useLocations.ts         # Hook for locations
│   ├── types/
│   │   └── api.ts                  # Interfaces for API responses
│   ├── styles/
│   │   ├── GlobalStyles.ts         # Global styled-components
│   │   ├── theme.ts                # Theme configuration with design tokens
│   │   ├── styled.d.ts             # TypeScript definitions for theme
│   │   └── globals.css             # CSS global styles
│   └── pages/
│       ├── _app.tsx                # App wrapper with providers
│       ├── _document.tsx           # Document configuration
│       ├── index.tsx               # Home page
│       └── api/                    # API routes
├── public/                         # Static assets
├── .babelrc                        # Babel configuration for styled-components
├── .gitignore
├── eslint.config.mjs               # ESLint configuration
├── next.config.ts                  # Next.js configuration
├── next-env.d.ts                   # Next.js TypeScript definitions
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
└── README.md
```


## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rick-and-morty
   npm install
   npm run dev```

 ### Notas  

-Por el tamaño del proyecto se decidio elegir una estructura de carpetas simples (Flat). En el caso de tener un proyecto de mayor tamaño, elegiria una estructura de Atomic Design o Feature-Based, dependiendo tambien en el tamaño del equipo.

-Si bien se utilizo styled-components, creo que Tailwind Tailwind CSS ofrece mas ventajas de performance sobre styled-components por su enfoque de utilidades pre-compiladas. Al generar todo el CSS en build time, elimina completamente el overhead de procesar estilos en JavaScript durante la ejecución. Esto resulta en bundles más pequeños, ya que Tailwind purga automáticamente todas las clases no utilizadas, resultando típicamente en archivos CSS de menos de 10KB. Además, al no necesitar calcular estilos dinámicamente en cada render, los componentes se renderizan más rápido. A su vez, es mas rapido de escribir y de leer.

-Con respecto al uso de IA, se utilizo copilot integrado a Visual Studio Code, usado como asistente de programación durante todo el proceso de desarrollo. El desarrollo se realizó de manera iterativa y conversacional, validando paso a paso el avance. Copilot ayudó a automatizar la configuración inicial del repositorio. A su vez, se uso para agilizar la planificación y arquitectura de archivos y carpetas. Tambien para validar buenas practicas y para complementar lo implementado respecto a accesibilidad.
   
-Si este fuera un proyecto en produccion primero analizaria mejor los detalles de UI, espaciados, colores, bordes, para validar que sea una UI bonita pero tambien funcional a nivel Accesibilidad. Tambien agregaria una implementacion para que el usuario pueda tener navegación por teclado. Agregaria skeletons como loaders que son mas visuales.
Tal vez le agregaria alguna funcionalidad extra, tal vez una especie de juego, donde tenga que adivinar los personajes y los lugares en los que estuvieron, ya que tengo los datos. 
