import path from "path";
import { fileURLToPath } from "url";

import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";

import dotenv from "dotenv";

dotenv.config();

const distPath = "F:/quickwide/icms-deploy/icms-static/" + process.env.DOMIN;

const isProduction = process.env.NODE_ENV === "production";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",
  // outDir: isProduction ? distPath : "dist",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    alpine(),
    icon({
      include: {
        tabler: ["*"],
        "flat-color-icons": [
          "template",
          "gallery",
          "approval",
          "document",
          "advertising",
          "currency-exchange",
          "voice-presentation",
          "business-contact",
          "database",
        ],
      },
    }),
  ],

  image: {
    service: squooshImageService(),
    domains: ["https://icms.aixdb.cn"],
  },

  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/icms/upload/": {
          target: "http://49.234.109.212:3009",
          changeOrigin: true,
          pathRewrite: {},
        },
      },
    },
    define: {
      __DOMAIN__: JSON.stringify(process.env.DOMIN || "test.com"),
    },
  },
});
