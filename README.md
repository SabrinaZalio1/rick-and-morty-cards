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
```
rick-and-morty/
├── src/
│   ├── components/
│   │   ├── CharacterCard.tsx           # Character card component
│   │   ├── CharacterCard.styles.ts     # Character card styles
│   │   ├── CharactersTab.tsx           # Characters tab content
│   │   ├── CharactersTab.styles.ts     # Characters tab styles
│   │   ├── LocationCard.tsx            # Location card component
│   │   ├── LocationCard.styles.ts      # Location card styles
│   │   ├── LocationsTab.tsx            # Locations tab content
│   │   ├── LocationsTab.styles.ts      # Locations tab styles
│   │   ├── Tabs.tsx                    # Tab navigation component
│   │   └── Tabs.styles.ts              # Tabs styles
│   ├── hooks/
│   │   ├── useCharacters.ts            # React Query hook for characters
│   │   └── useLocations.ts             # React Query hook for locations
│   ├── types/
│   │   └── api.ts                      # TypeScript interfaces for API
│   ├── styles/
│   │   ├── GlobalStyles.ts             # Global styled-components
│   │   ├── theme.ts                    # Theme with design tokens
│   │   ├── styled.d.ts                 # TypeScript theme definitions
│   │   └── globals.css                 # CSS global styles
│   └── pages/
│       ├── _app.tsx                    # App wrapper with providers
│       ├── _document.tsx               # Document configuration
│       ├── index.tsx                   # Home page
│       └── api/                        # API routes
├── public/                             # Static assets
├── .babelrc                            # Babel config for styled-components
├── .gitignore
├── eslint.config.mjs                   # ESLint configuration
├── next.config.ts                      # Next.js configuration
├── next-env.d.ts                       # Next.js TypeScript definitions
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
└── README.md
```
```


## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rick-and-morty
   npm install
   npm run dev```

 ### Notes  

-Due to the size of the project, a simple (Flat) folder structure was chosen. If this were a larger project, I would choose an Atomic Design or Feature-Based structure, also depending on the size of the team.

-Although styled-components was used, I believe Tailwind CSS offers more performance advantages over styled-components due to its precompiled utility-first approach. By generating all CSS at build time, it completely eliminates the overhead of processing styles in JavaScript at runtime. This results in smaller bundles, since Tailwind automatically purges all unused classes, typically producing CSS files under 10KB. Additionally, since it does not need to calculate styles dynamically on each render, components render faster. It is also faster to write and read.

-Regarding the use of AI, Copilot integrated into Visual Studio Code was used as a programming assistant throughout the entire development process. The development was carried out in an iterative and conversational way, validating progress step by step. Copilot helped automate the initial repository setup. Also helped speed up repetitive and monotonous tasks, such as creating files and boilerplate structures, allowing me to focus more on problem-solving and higher-level decisions. It was also used to streamline file and folder architecture planning. Additionally, it was used to validate best practices and to complement what was implemented regarding accessibility.

-If this were a production project, I would first take a deeper look at UI details such as spacing, colors, and borders to ensure the interface is visually appealing but also functional from an accessibility standpoint. I would also add an implementation to enable full keyboard navigation for users. I would include skeleton loaders, which are more visually intuitive. Also I would change the folders structure to have de style files in specific folders of the component, o a folder with all the style files in the same place. I might also add some extra functionality, perhaps a small game where users have to guess the characters and the places they visited, since the data is already available.

-The instructions of the challenge are incorrect. It says twice Locations Tab, where it should be Locations Tab and Characters Tab. Also the url are incorrect. The correct one is: https://rickandmortyapi.com/api/character
