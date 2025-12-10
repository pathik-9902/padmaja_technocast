import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/padmaja_technocast/", // <-- set to "/<repo-name>/"
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
