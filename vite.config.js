import { fileURLToPath, URL } from "node:url";
import { env } from "node:process";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: env.GITHUB_ACTIONS ? "/rithick-portfolio/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
