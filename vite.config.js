import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/paul-portfolio/", // <-- Add this
  plugins: [react()],
});
