# TŌKI Coffee App - Replit.md

## Overview

TŌKI is a modern full-stack web application for a Japanese-inspired coffee shop chain that combines craft coffee with gamified culture. The application features a sleek, minimalist design with interactive rewards system through QR code-based trivia challenges.

## System Architecture

### Frontend Architecture
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom color scheme inspired by Japanese minimalism
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Color Scheme**: Warm earth tones (beige, cream, wood, coffee browns) following Japanese aesthetic

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful API with JSON responses
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple

### Key Components

#### Database Schema
- **Users**: Authentication, points, streak tracking
- **Menu Items**: Coffee products with categories, pricing, featured status
- **Locations**: Multi-format stores (storefronts, carts, kiosks) with geolocation
- **Trivia Questions**: QR code-linked questions with difficulty levels and point values
- **User Responses**: Tracking user trivia participation
- **Email Subscriptions**: Newsletter signup functionality

#### Frontend Features
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Elements**: QR code scanner simulation, trivia game interface
- **Location Services**: Distance calculation and city-based filtering
- **Newsletter Integration**: Email subscription with form validation
- **Smooth Navigation**: Section-based scrolling with sticky navigation

#### Backend Services
- **Menu Management**: CRUD operations for coffee menu items
- **Location Services**: Geographic search and filtering capabilities
- **Trivia System**: Random question generation and scoring
- **User Management**: Points and streak tracking system
- **Email Collection**: Newsletter subscription handling

## Data Flow

1. **Client Request**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling
5. **UI Updates**: React Query automatically updates UI based on server state

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with drizzle-zod for type-safe database operations
- **UI Library**: Extensive Radix UI component collection
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Forms**: React Hook Form with @hookform/resolvers for validation
- **Date Handling**: date-fns for date formatting and manipulation

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database Tooling**: drizzle-kit for migrations and schema management
- **Linting**: ESBuild for production bundling
- **Development**: tsx for TypeScript execution in development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle kit handles schema migrations
4. **Asset Optimization**: Vite optimizes static assets and code splitting

### Production Configuration
- **Environment**: Node.js production environment
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Files**: Express serves built React application
- **Session Storage**: PostgreSQL-backed sessions for scalability

### Development Workflow
- **Hot Reload**: Vite provides fast development server with HMR
- **TypeScript**: Strict type checking across frontend and backend
- **Database**: Push schema changes with `npm run db:push`
- **Testing**: Built-in error handling and logging for debugging

## Simplified Version Available

The application now offers two versions:

### Simple Landing Page (Default - `/`)
- **Pure static content** - No database or backend dependencies
- **Minimalist design** - Clean, focused on essential information
- **Static menu** - Hard-coded menu items and pricing
- **Contact information** - Simple location, hours, and contact details
- **No complex features** - Removed QR codes, trivia, user tracking

### Full Featured Version (`/full`)
- **Complete backend system** - Database, API endpoints, user management
- **Interactive features** - QR code trivia, rewards system, dynamic content
- **Real-time data** - Menu items loaded from database
- **Advanced functionality** - User points, streaks, location finder

## Components

### Simple Version Components
- `SimpleNavigation.tsx` - Clean navigation with smooth scrolling
- `SimpleHero.tsx` - Hero section with call-to-action buttons
- `SimpleMenu.tsx` - Static menu with hardcoded items and pricing
- `SimpleContact.tsx` - Contact information and location details
- `SimpleFooter.tsx` - Clean footer with essential information

### Original Complex Components
- All original components remain available for the full version
- Database integration and API calls preserved
- Full trivia and rewards system functionality maintained

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Added simplified landing page version - removed database dependency, created static components for minimalist coffee shop landing page
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```