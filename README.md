# SoftSell

A modern, responsive single-page marketing website for a fictional software resale startup called **SoftSell**.

## Features
- Beautiful, responsive design with React, Tailwind CSS, and Framer Motion
- Light/Dark mode toggle with system preference and persistence
- Animated hero, feature, testimonial, and contact sections
- Professional contact form with validation
- Floating AI-powered chat widget (demo mode, backend ready for real LLM)


## Demo
> **Live URL:** _Coming soon via GitHub Pages_

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repo:
   ```sh
   git clone https://github.com/YOUR_USERNAME/softsell.git
   cd softsell
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development
Start the local dev server:
```sh
npm run dev
```

### Build for Production
```sh
npm run build
```


## AI Chat Widget
- The floating chat widget is implemented and styled.
- **Demo mode:** Shows example answers and a note about API credits.
- **Backend ready:** The Express backend is set up for OpenAI or Claude (Anthropic) API integration. Add your API key in `server/.env` and start the backend to enable real AI chat.

## Project Structure
```
softsell/
├── public/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── server/           # Express backend for AI chat
│   ├── index.js
│   └── .env
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Credits
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Heroicons](https://heroicons.com/)
- [OpenAI API](https://platform.openai.com/)

- Project Setup: 30 minutes
- Component Development: 2 hours
- Styling and Animations: 1.5 hours
- Testing and Refinement: 1 hour
- Documentation: 30 minutes

Total: ~5.5 hours

