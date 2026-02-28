---
type: project
draft: false
date: 2025-03-11
title: Neutralinojs, Vite, Vue & Tailwind Boilerplate
categories:
  - Coding
  - JavaScript / TypeScript
  - Neutralinojs
  - TailwindCSS
  - Vue
description: A boilerplate for building lightweight cross-platform desktop applications with modern web technologies
status: completed
tech:
  - Neutralinojs
  - Vite
  - Vue 3
  - TailwindCSS
  - TypeScript
  - ESLint
  - Prettier
---

# Neutralinojs, Vite, Vue & Tailwind Boilerplate

A modern boilerplate for building lightweight cross-platform desktop applications using web technologies. This project combines modern frontend tooling with Neutralinojs's lightweight native runtime.

## What is Neutralinojs?

[Neutralinojs](https://neutralino.js.org/) is a lightweight and portable application development framework that lets you develop cross-platform desktop applications using HTML, CSS, and JavaScript. Unlike Electron, it doesn't bundle a Chromium engine, resulting in significantly smaller application sizes (typically under 5MB).

## Tech Stack

This boilerplate is based on `npm create vue@latest` with Neutralinojs and TailwindCSS manually integrated:

- **Neutralinojs**: Lightweight cross-platform framework
- **Vue 3**: Progressive JavaScript framework with Composition API
- **Vite**: Next-generation frontend build tool with HMR
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **ESLint**: Code quality and style enforcement
- **Prettier**: Code formatting

## Features

- **Hot Module Replacement (HMR)**: Fast development with Vite's HMR
- **TypeScript Support**: Full type safety across the codebase
- **Modern Vue 3**: Composition API and script setup syntax
- **TailwindCSS**: Rapid UI development with utility classes
- **Build Scripts**: Automated release builds for macOS (based on [neutralino-build-scripts](https://github.com/hschneider/neutralino-build-scripts))

## Quick Start

```bash
# Clone the repository
git clone https://github.com/jeroenvanwissen/neutralino-vite-vue-tailwind-boilerplate.git
cd neutralino-vite-vue-tailwind-boilerplate

# Install dependencies
npm install

# Download Neutralinojs binaries
npm run neu:update

# Run in development mode with HMR
npm run neu:run

# Build the application
npm run build

# Build release for macOS
npm run neu:build:release:mac
```

## Why This Boilerplate?

This boilerplate saves you hours of configuration by providing a pre-configured setup that combines:

- Modern Vue 3 development experience
- Lightning-fast Vite build tooling
- Lightweight Neutralinojs runtime
- TypeScript configuration
- Integrated TailwindCSS styling

Perfect for developers who want to build cross-platform desktop apps without the overhead of Electron.

## Links

- [GitHub Repository](https://github.com/jeroenvanwissen/neutralino-vite-vue-tailwind-boilerplate 'Neutralinojs, Vite, Vue & Tailwind Boilerplate on GitHub')
- [Neutralinojs](https://neutralino.js.org/ 'Neutralinojs')
- [Neutralinojs on GitHub](https://github.com/neutralinojs 'Neutralinojs on GitHub')
- [Vite](https://vitejs.dev/ 'Vite')
- [Vue](https://vuejs.org/ 'Vue')
- [TailwindCSS](https://tailwindcss.com/ 'TailwindCSS')
