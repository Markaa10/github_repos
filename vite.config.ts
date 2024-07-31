import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "Github Search",
        short_name: "ghsearch",
        theme_color: "#ffffff",
        description: "Find your github repositories and organizations.",
      },
      pwaAssets: {
        config: true,
        overrideManifestIcons: true,
      },
    }),
  ],
});
