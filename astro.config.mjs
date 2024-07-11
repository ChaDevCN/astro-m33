import path from "path";
import { fileURLToPath } from "url";

import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
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
  },
});
