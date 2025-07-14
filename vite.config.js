import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    ...(command === 'serve'
      ? {
          server: {
            host: true,
            port: 5173,
            hmr: {
              clientPort: 5173,
            },
            allowedHosts: [
              'localhost',
              '127.0.0.1',
              '285ce74089f1.ngrok-free.app', // Replace this when your Ngrok URL changes
            ],
          },
        }
      : {})
  };
});
