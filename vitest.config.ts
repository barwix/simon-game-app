import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Changed from 'node' to support React components
    include: ['tests/**/*.test.{ts,tsx}'], // Added tsx support
    setupFiles: ['./tests/setup.ts'], // Setup file for testing library
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'], // Added tsx support
      exclude: [
        'src/**/*.d.ts',
        'src/**/index.ts',
        'src/**/*.types.ts',
        'src/frontend/**/*.tsx', // Exclude frontend components from coverage for now (can add later)
      ],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70,
      },
    },
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@backend': path.resolve(__dirname, './src/backend'),
      '@frontend': path.resolve(__dirname, './frontend/src'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
});
