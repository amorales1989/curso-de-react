import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Corrected from user's provided snippet to ensure syntactic correctness

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
