// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://jrwnnnn.me",
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter:
        cloudflare(),
});