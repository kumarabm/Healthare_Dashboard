// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const plugins = [react()];

export default defineConfig(async () => {
  if (process.env.REPL_ID !== undefined) {
    const { default: runtimeErrorOverlay } = await import("@replit/vite-plugin-runtime-error-modal");
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(runtimeErrorOverlay());
    plugins.push(cartographer());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve("client", "src"),
        "@shared": path.resolve("shared"),
        "@assets": path.resolve("attached_assets"),
      },
    },
    root: path.resolve("client"),
    build: {
      outDir: path.resolve("dist/public"),
      emptyOutDir: true,
    },
  };
});
