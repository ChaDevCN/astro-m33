import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import { defineConfig, squooshImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import alpine from '@astrojs/alpinejs';
import icon from 'astro-icon';
import yaml from '@rollup/plugin-yaml';
import compress from 'astro-compress';

import viteCompression from 'vite-plugin-compression';

import dotenv from 'dotenv';
import Yaml from 'yaml';

const file = fs.readFileSync('./config.yml', 'utf8');
const {
  build: { filename },
  site: { url, staticBase, site },
} = Yaml.parse(file);
dotenv.config();

const distPath = 'F:/quickwide/icms-deploy/icms-static/' + filename;

const isProduction = process.env.NODE_ENV === 'production';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  site,
  outDir: isProduction ? distPath : 'dist',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    alpine({ entrypoint: '/src/plugin/entrypoint' }),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
  ],

  image: {
    service: squooshImageService(),
    // domains: ["https://icms.aixdb.cn"],
  },

  vite: {
    plugins: [viteCompression({ algorithm: 'brotliCompress' }), yaml()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/icms/upload/': {
          target: staticBase,
          changeOrigin: true,
          pathRewrite: {},
        },
      },
    },
    define: {
      __DOMAIN__: JSON.stringify(url),
    },
    build: {
      chunkSizeWarningLimit: 500,
      cssCodeSplit: true,
      assetsInlineLimit: 10000,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
});
