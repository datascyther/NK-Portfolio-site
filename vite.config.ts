import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Modern baseline → smaller, faster runtime output
    target: "es2022",
    cssTarget: "chrome109",
    cssMinify: true,
    minify: "esbuild",
    reportCompressedSize: true,
    // Single-file deploy keeps assets inlined; images stay external
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Deterministic naming if multi-chunk ever appears
        manualChunks: undefined,
      },
    },
  },
  esbuild: {
    // Strip pure debug noise from production bundles
    legalComments: "none",
    drop: ["debugger"],
  },
});
