import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ required
  ],
  base: "/", // 👈 This fixes 404s on Vercel
});
