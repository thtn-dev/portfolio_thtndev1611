/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_variable.scss";`,
      },
    },
  },
});
