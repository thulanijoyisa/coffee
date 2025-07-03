# TŌKI Coffee Shop Website

A modern Japanese minimalism-inspired coffee shop website built with React, TypeScript, and Express.js.

## Overview

TŌKI is a concept website for a coffee shop chain featuring:
- Clean, minimalist Japanese aesthetic with warm earth tones
- Responsive design optimized for all devices
- Interactive elements including location finder and future QR rewards system
- Email newsletter subscription
- Modern tech stack with type safety

## Tech Stack

**Frontend:**
- React 18+ with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- TanStack Query for data fetching
- Wouter for routing
- Radix UI + shadcn/ui for components

**Backend:**
- Node.js with Express.js
- TypeScript throughout
- In-memory storage (easily replaceable with database)
- RESTful API design

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/           # Utilities and helpers
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema and types
└── attached_assets/      # Brand images and assets
```

## Features

### Current Features
- **Navigation**: Smooth scrolling between sections
- **Hero Section**: Brand messaging with call-to-actions
- **About Section**: Company story and values
- **Menu**: Coffee offerings with real-time data
- **Locations**: Store finder with "Coming Soon" status
- **Rewards Preview**: Mockup of future QR trivia system
- **Footer**: Email subscription and social links

### Future Features (Currently Conceptual)
- QR code scanning for trivia challenges
- Points and streak tracking
- Store operations and management
- Real location integration

## API Endpoints

- `GET /api/menu` - Get all menu items
- `GET /api/menu/featured` - Get featured items
- `GET /api/locations` - Get all locations
- `GET /api/trivia/random` - Get random trivia question
- `GET /api/stats` - Get site statistics
- `POST /api/subscribe` - Subscribe to newsletter

## Customization

### Colors
The Japanese minimalist color palette is defined in `client/src/index.css`:
- Warm beige and cream backgrounds
- Wood tones for accents
- Coffee browns for text
- Soft grays for subtle elements

### Content
Update store information, menu items, and locations in `server/storage.ts`.

### Styling
Modify the Tailwind configuration in `tailwind.config.ts` or add custom styles in `client/src/index.css`.

## Deployment

### Building for Production
```bash
npm run build
```

This creates optimized files in the `dist/` directory ready for deployment.

### Environment Variables
Set these for production:
- `NODE_ENV=production`
- `DATABASE_URL` (if using external database)

## Accessing the Source Code

### On Replit
1. All source files are visible in the file explorer on the left
2. Click any file to view and edit the code
3. Changes are automatically saved and hot-reloaded

### Downloading the Code
1. Click the three dots menu (⋯) in the top-right
2. Select "Download as zip"
3. Extract the zip file to your local machine
4. Run `npm install` and `npm run dev` to start locally

### Git Integration
1. Connect to GitHub via Replit's Git tab
2. Push changes to your own repository
3. Clone the repository locally for development

## License

This is a concept project. Feel free to use and modify for your own coffee shop or business needs.

## Support

For questions about the code or customization, refer to the component files which include detailed comments and TypeScript types for guidance.