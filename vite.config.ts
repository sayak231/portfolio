import { defineConfig } from "vite";
import eslint from "@rollup/plugin-eslint";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    {
      ...eslint({ include: "src/**/*.+(js|jsx|ts|tsx)" }),
      enforce: "pre",
    },
  ],
});
