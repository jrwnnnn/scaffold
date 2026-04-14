// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	site: "https://jrwnnnn.me",
	vite: {
		plugins: [tailwindcss()],
	},
	output: "server",
	adapter: cloudflare(),
});
