# Rui Documentation Website

A professional documentation website for the Rui programming language, built with Next.js 15, Tailwind CSS, and MDX.

## Features

- **Modern Design**: Clean, professional design inspired by Bun.sh and Deno docs
- **Responsive Layout**: Mobile-friendly with sidebar navigation
- **Dark/Light Mode**: Theme switching with next-themes
- **MDX Support**: Rich documentation with interactive components
- **Syntax Highlighting**: Code examples with proper highlighting
- **Fast Performance**: Optimized with Next.js 15 and App Router

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Content**: MDX for documentation
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd rui-docs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
rui-docs/
├── app/                    # Next.js App Router
│   ├── docs/              # Documentation pages
│   │   ├── installation/  # Installation guide
│   │   ├── hello-world/   # Hello World tutorial
│   │   ├── variables/     # Variables documentation
│   │   ├── operators/     # Operators documentation
│   │   ├── conditionals/  # Conditionals documentation
│   │   ├── functions/     # Functions documentation
│   │   ├── booleans/      # Booleans documentation
│   │   ├── cli/           # CLI usage documentation
│   │   ├── vscode/        # VS Code integration
│   │   └── contributing/  # Contributing guide
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── sidebar.tsx       # Navigation sidebar
│   ├── theme-provider.tsx # Theme provider
│   └── theme-toggle.tsx  # Theme toggle button
├── lib/                  # Utility functions
├── public/               # Static assets
├── mdx-components.tsx    # MDX component configuration
├── next.config.ts        # Next.js configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Documentation Structure

The documentation is organized into the following sections:

### Getting Started

- **Installation**: How to install Rui
- **Hello World**: Your first Rui program

### Language Basics

- **Variables**: Working with variables and data types
- **Operators**: Arithmetic, comparison, and logical operators
- **Conditionals**: if/else statements and while loops

### Advanced Features

- **Functions**: Defining and using functions
- **Booleans & Logic**: Working with boolean values

### Tools & Integration

- **CLI Usage**: Command-line interface
- **VS Code Integration**: Development environment setup

### Community

- **Contributing**: How to contribute to Rui

## Customization

### Adding New Documentation Pages

1. Create a new directory in `app/docs/`
2. Add a `page.mdx` file with your content
3. Update the navigation in `components/sidebar.tsx`

### Styling

The project uses Tailwind CSS with custom design tokens. Key files:

- `app/globals.css`: Global styles and CSS variables
- `tailwind.config.js`: Tailwind configuration
- `components/ui/`: shadcn/ui component styles

### Theme Customization

The theme system is built with next-themes and CSS variables. Customize colors in `app/globals.css`.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The project is ready for deployment on platforms like:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## About Rui

Rui is a beginner-friendly, lightweight programming language inspired by JavaScript. It features:

- Clean, readable syntax
- Implicit typing with `suppose` keyword
- Functions defined with `define`
- `until` loops (similar to while)
- Easy-to-learn structure
- Perfect for programming education

Visit the documentation to learn more about Rui and start your programming journey!
