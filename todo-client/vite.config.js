import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT || 3000,
    proxy: {
      "/todos": {
        target: "http://rest:8081",
      },
    },
  },
});
