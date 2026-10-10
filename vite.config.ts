import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative asset paths let this project work under a GitHub Pages repository URL.
export default defineConfig({ base: './', plugins: [react()] })
