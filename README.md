# Pokédex

A responsive React + TypeScript Pokédex application built with the [PokéAPI](https://pokeapi.co/).

## Live Demo

[View the deployed application](https://pokedex-kappa-virid.vercel.app/pokemon)

## Features

- Browse Pokémon with pagination
- Browse Pokémon with infinite loading
- View detailed information for individual Pokémon
- Pokémon loading and error states with retry actions
- Responsive layout across desktop, tablet, and mobile
- Pagination state preserved in the URL
- Reusable and componentized React UI
- API-driven data fetching with request caching and cancellation

## Tech Stack

- React
- TypeScript
- Vite
- Styled Components
- TanStack Query
- React Router
- PokéAPI

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## API

This project uses [PokéAPI](https://pokeapi.co/) to retrieve Pokémon data.

## Views

The application provides multiple ways to explore the Pokémon collection:

- **Pagination** — Navigate between pages of Pokémon while preserving the current page in the URL.
- **Infinite Scroll** — Load additional Pokémon progressively as needed.
- **Pokémon Details** — View detailed information including the Pokémon's sprite, types, height, weight, abilities, base stats, and base experience.

## Project Structure

The application is organized around reusable UI components and Pokémon-specific feature logic:

- `components/` — Shared and reusable UI components
- `features/pokemon/` — Pokémon API, hooks, types, and utilities
- `pages/` — Page-level components and page-specific styling
