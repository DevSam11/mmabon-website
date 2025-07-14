import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This makes Vite listen on all network interfaces, essential for Ngrok
    host: true,
    // Ensure this port matches the one your React app runs on (e.g., 5173 for Vite default)
    port: 5173,
    // HMR (Hot Module Replacement) configuration for Ngrok
    hmr: {
      clientPort: 5173, // This should usually be the same as your dev server port
    },
    // List of allowed hosts (domains) that can access your development server
    allowedHosts: [
      'localhost', // Always allow localhost
      '127.0.0.1', // Always allow the loopback address
      // --- IMPORTANT ---
      // This is the line you need to update with your new Ngrok URL each time it changes.
      '285ce74089f1.ngrok-free.app', // <--- Your NEW Ngrok host goes here!
      // If your Ngrok URL changes frequently, and you understand the security implications,
      // you could consider using a wildcard (e.g., '**.ngrok-free.app') but be cautious.
    ],
  },
});